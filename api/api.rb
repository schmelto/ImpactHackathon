require 'webrick'
require 'json'
require 'yaml'
require 'pg'

def policy_cors()
    # return 'vortex.cubuzz.de' # Only from our website
    return '*' # Any CORS
end

db = PG::Connection.new( user: 'root', dbname: 'postgres', port: 26200, host: 'localhost' )
# db.exec('SELECT * FROM nutzer')

server = WEBrick::HTTPServer.new :Port => 8500

server.mount_proc '/' do |req, res|
    res.body = File.read('./web/redir_to_lab.html')
end

server.mount_proc '/api/v1/' do |req, res|
    res.header['Access-Control-Allow-Origin'] = policy_cors()
    # puts res.header
    res.body = 'Hi! Please request from the actual API subcalls.'
end

server.mount_proc '/api/v1/search' do |req, res|
    res.header['Access-Control-Allow-Origin'] = policy_cors()
    puts 'Detailed: ' + req.inspect
    puts 'Request: ' + req.request_line
    puts 'Query: ' + req.query
    puts 'Body: ' + req.body
end

server.mount_proc '/debug' do |req, res|
    puts 'Detailed: ' + req.inspect
    puts 'Request: ' + req.request_line
    puts 'Query: ' + req.query
    puts 'Body: ' + req.body
    res.body = File.read('./web/debug.html.template').sub('%%MARSHALL%%', req.inspect).sub('%%YAML%%', YAML.dump(req.to_s)).sub('%%QUERY%%', req.query.to_s).sub('%%BODY%%', req.body.to_s).sub('%%REQUEST%%', req.request_line.to_s)
end

trap 'INT' do 
    server.shutdown
end

server.start