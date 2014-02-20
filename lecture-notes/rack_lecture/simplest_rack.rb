require 'rubygems'
require 'rack'
require 'pp'

class HelloWorld
  def call(env)
    [200, {"Content-Type" => "text/html"}, ["Hello Rack!"]]
  end
end

Rack::Handler::WEBrick.run HelloWorld.new, :Port => 9292
