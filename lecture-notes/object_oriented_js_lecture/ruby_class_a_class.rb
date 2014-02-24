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

puts Talker.new("mundo").say_hello
puts Talker.new("le monde").say_hello
