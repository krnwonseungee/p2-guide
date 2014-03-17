class Talker
  def initialize(word)
    @word = word
  end

end

class Talker
  def say_hello
    "Hello #{@word}"
  end
end


t1= Talker.new("mundo")
puts t1.say_hello
t2 = Talker.new("le monde").say_hello

