## How to inform the user when active record validations fail?
###Ways to validate user input
* At the Active Record class (```validates :name, presence: true```)
* At the Migration (```t.string name, null: false```)
* In the browser (javascript)
* In the controller

###Active Record prefers class level validation
```
class User < ActiveRecord::Base
  validates :name, presence: true
end
```

###Accessing the Active Record validations
```
p = User.new(params)
p.valid? #=> returns True or False
p.errors.messages #=> returns {name:["can't be blank"]}
```
So here's one way to inform the user of an invalid input.  We check if ```p.valid?``` and if ```false```,
then send ```p.errors.messages``` to a view.

##Resources
* [Active Record Validations](http://edgeguides.rubyonrails.org/active_record_validations.html)
* Pro Active Record for Ruby: Databases with Ruby and Rails, by Kevin Marshall, et al, 2007, pp 80-88.
* [Active Record Validations - Github page](https://gist.github.com/azinazadi/1372945)

