#!/usr/bin/env ruby

def outer(fromMain)
  outerInteger = 2;
  printf("Outer got something from main(%d) and has its own(%d)\n", fromMain, outerInteger);
  inner();
end

def main
  year = 2014
  printf("Hello Banana Slugs (%d) vintage\n", year);
  outer(year);

  # Return a Proc with the sweet stabby arrow syntax

  #return ->(cohort) do
    #puts "behold, #{cohort}, the power of closures!  I still know that year is #{year}"
  #end

  #Proc.new do |cohort|
    #puts "behold, #{cohort}, the power of closures!  I still know that year is #{year}"
  #end
  
  lambda do |cohort|
    puts "behold, #{cohort}, the power of closures!  I still know that year is #{year}"
  end

end # end of main()

def inner;end
a_closure = main
puts a_closure.class
a_closure.call "Banana Slugs"
