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
                addresse:       'Zweiundvierziger Weg 69',
                bewohner:       5,
                preis:          420,
                sqm:            69,
                distance:       1.5,
                prev_img:       ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Rymill_Park_HDR_%288229259514%29.jpg/1200px-Rymill_Park_HDR_%288229259514%29.jpg'],
                match_score:    12.42,
                beschreibung:   'Eine kleine, abgelegene Wohnung nahe Stadtrand. Suchen einen freundlichen Mitbewohner.'
            },
            {
                stadt:          'Koelle',
                addresse:       'Highway to Hell 9',
                bewohner:       82,
                preis:          1,
                sqm:            1,
                distance:       400.2,
                prev_img:       ['https://cdn.cubuzz.de/static/reeves.jpg', 'https://cdn.cubuzz.de/static/reeves.jpg'],
                match_score:    1,
                beschreibung:   'HAST DU LUST RICHTIG ZU ROCKEN? DANN KOMM IN DIE BUDE! WIR BITEN KOCS UND NUTTAN!!!!1'
            }
        ]
        return JSON.generate(results)
    end
end