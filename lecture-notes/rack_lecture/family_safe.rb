require 'pp'
require 'debugger'
require 'uncensored'

class FamilySafe
  def call(env)
    pp env
    response = Uncensored.new.call(env)
    [200, {"Content-Type" => "text/html"}, prefix(env) + denaughty_words(response.last)]
  end

  def prefix(env)
    env["REMOTE_HOST"] == "localhost" ? [ "<P>Calling from home!</P>" ] : []
  end

  def denaughty_words(enum)
    line = enum.join(":")
    line.gsub!(/Twerking/, 'doing the waltz').
      gsub!(/Sexism/, 'antiquated gender politics').
      gsub!(/making out/, 'making friends')
    line.split(":")
  end
end
