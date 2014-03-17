#!/usr/bin/env ruby


class Talker
  def initialize(name)
    @name = name
  end
end

class Talker
  def say_hi
    "hello #{@name}"
  end
end


puts Talker.new("Mathilde").say_hi
