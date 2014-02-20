require 'pp'

class Uncensored
  def call(env)
    [200, {"Content-Type" => "text/html"}, offensive_things]
  end

  def offensive_things
    [ "Twerking<br>",
      "Sexism<br>",
      "The wifi being down<br>",
      "Grandma making out with a stranger<br>"
    ]
  end
end
