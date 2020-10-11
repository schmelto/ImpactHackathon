require 'pg'
require 'json'

class API
    def initialize(db)
        @db = db
    end

    def search(userid)
        # Get current users filter settings
        filters = get_filters(userid)
        # Update cache
        update_cache(userid, filters)
        # Fetch results from database, parse them

    end
    
    def set_filter(userid, filter)
        raise 'Invalid format for userid' if userid.to_i == 0
        raise 'Filter invalid.' if filter['fn'] == nil || filter['fa'] == nil
        puts 'sf'
        # Delete old filters
        res = @db.exec("DELETE FROM filter_nutzer WHERE userid = #{userid.to_s} AND #{filter['fa']} != '#{filter['fn']}'")
    end
    
    def get_filters(userid)
        puts 'gf'
        res = @db.exec("SELECT * FROM filter_nutzer WHERE userid = #{userid.to_s}") 
    end

    def update_cache(userid, filters)
        puts 'chc'
    end

    def dummy_search(_userid = nil)
        results = [
            {
                stadt:          'Heilbronn',
                addresse:       'Sichererstraße 58',
                bewohner:       3,
                preis:          410,
                sqm:            65,
                distance:       0.85,
                prev_img:       ['https://cdn.cubuzz.de/static/room2.jpg'],
                match_score:    7,
                non_smoking:    true,
                hobbies:       ['Fitness', 'Video Games'],
                # ematch_score:   ,
                beschreibung:   "From the outside this house looks: luxurious. It has been built with grey bricks and has walnut wood decorations. Small, half rounded windows add to the overall style of the house and have been added to the house in a very symmetric way.

                The house is equipped with an old-fashioned kitchen and two modern bathrooms, it also has a fairly small living room, two bedrooms, a spacious dining room, a playroom and a small garage.
                
                The building is shaped like a circle. The house is half surrounded by a patio.
                The second floor is the same size as the first, but part of it hangs over the edge of the floor below, creating an overhang on one side and a balcony on the other. This floor has a very different style than the floor below.
                
                The roof is low and pyramid shaped and is covered with brown ceramic tiles. One large chimney sits at the side of the house. A few large windows let in just enough light to the rooms below the roof.
                The house itself is surrounded by a modest garden, with mostly grass, a few flower patches and a children's playground."
            },
            {
                stadt:          'Heilbronn',
                addresse:       'Kirchhöfle 11',
                bewohner:       2,
                preis:          390,
                sqm:            45,
                distance:       0.75,
                prev_img:       ['https://cdn.cubuzz.de/static/room4.jpg'],
                match_score:    9,
                non_smoking:    true,
                hobbies:        ['Fitness', 'Golf', 'Video Games'],
                # ematch_score:   ,
                beschreibung:   "From the outside this house looks: magnificent. It has been built with bricks covered in render and has burgandy brick decorations. Tall, wide windows brighten up the house and have been added to the house in a very symmetric way.

                The house is equipped with a huge kitchen and three bathrooms, it also has a cozy living room, two bedrooms, a snug dining area and a roomy garage.
                
                The building is shaped like a circle. The house is fully surrounded by wooden overhanging panels.
                The second floor is bigger than the first, which creates a stylish overhang around the entire house. This floor has a different style than the floor below.
                
                The roof is high and v-shaped and is covered with brown roof tiles. Two small chimneys poke out the center of the roof. Rows of small windows let in plenty of light to the rooms below the roof.
                The house itself is surrounded by paved ground, with a small pond at one side and various potted plants all around the house."
            },
            {
                stadt:          'Heilbronn',
                addresse:       'Schaeuffelenstraße 35',
                bewohner:       5,
                preis:          370,
                sqm:            100,
                distance:       0.55,
                prev_img:       ['https://cdn.cubuzz.de/static/room1.jpg'],
                match_score:    6,
                non_smoking:    true,
                hobbies:        ['Fitness'],
                # ematch_score:   ,
                beschreibung:   "From the outside this house looks: nice and traditional. It has been built with sandstone and has cypress wooden decorations. Small, triangular windows add to the overall look of the house and have been added to the house in a very symmetric way.

                The house is equipped with a large kitchen and two modern bathrooms, it also has a cozy living room, five bedrooms, a spacious dining area and a cozy storage room.
                
                The building is shaped like a T. The two extensions are linked by wooden overhanging panels circling around half the house.
                The second floor is smaller than the first, which creates a layered style of look in combination with the roof. This floor has roughly the same style as the floor below.
                
                The roof is high and pyramid shaped and is covered with brown ceramic tiles. Two large chimneys sit at either side of the house. There are no windows on the roof.
                The house itself is surrounded by paved ground, with an outdoor eating and relaxing space and various potted plants."
            }
        ]
        return JSON.generate(results)
    end
=begin
    def dummy_user(_userid = nil)
        results = {
            name:               'Peter',
            aus:                'Heilbronn',
            studiert:           'Heilbronn University of Applied Sciences',
            profpic:            'https://cdn.cubuzz.de/static/peter.png'
        }
    end
=end
    def get_user(userid)
        results = @db.exec("SELECT * FROM nutzer INNER JOIN nutzerkategorie ON nutzerkategorie.nutzerkategorie = nutzer.nutzerkategorie WHERE userid = #{userid.to_s};")
        return JSON.generate(results[0])
    end
end