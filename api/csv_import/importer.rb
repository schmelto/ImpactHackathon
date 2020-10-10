# require 'pg'

# db = PG::Connection.new( user: 'root', dbname: 'postgres', port: 26200, host: 'localhost' )

require 'csv'
data = CSV.parse(File.read('./data_wggesucht.csv'), headers: true)

data.each do |row|
    row = row.field(0).split(';')
    # # nr_of_roommates;city_area;address;price_in_EUR;square_meters;available_from;available_to
    if row.length < 7
        row.push 'undef'
    end
    puts row.inspect
    # db.
end