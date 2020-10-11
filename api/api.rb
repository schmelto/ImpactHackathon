require 'webrick'
require 'json'
require 'yaml'
require 'pg'
require_relative './api_tools'

def policy_cors() return '*' end

db = PG::Connection.new( user: 'root', dbname: 'postgres', port: 26200, host: 'localhost' )
# db.exec('SELECT * FROM nutzer')
api = API.new(db)

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
    user_id = 1234
    res.body = api.search(user_id)
end

server.mount_proc '/api/v1/search/dummy' do |req, res|
    res.header['Access-Control-Allow-Origin'] = policy_cors()
    res.body = api.dummy_search(12345)
end

server.mount_proc '/api/v1/user' do |req, res|
    res.header['Access-Control-Allow-Origin'] = policy_cors()
    puts req.query
    res.body = api.get_user(req.query['uid'])
end

server.mount_proc '/reload' do |req, res|
    res.body = '200 OK'
    begin
        load('./api_tools.rb')
    rescue => exception
        res.body = "Fatal exception: #{exception.message}\nAt:#{exception.backtrace}"
    end
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