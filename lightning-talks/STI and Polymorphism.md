###Single table inheritance


**Single table inheritance allows you to have a base model that inherits from ActiveRecord::Base plus one or more subclasses that inherit from the base model. This can be useful in accurately modeling a domain. For example, if you wanted to create a table of US Legislators. There are several types US Legislator:**

* 435 Representatives
* 100 Senators
* 1 Commissioner
* 6 Delegates

**Delegates and the Commissioner are non-voting members, so let's put them together. To model this accurately, we might build some models like this:**


``` ruby
class Legislator < ActiveRecord::Base    
class Representative < Legislator
class Senator < Legislator
class NonVotingMember < Legislator 
```

**We should also make sure to create our migration properly:**
```ruby
class CreateLegislators < ActiveRecord::Migration
  def change
    create_table :legislators do |col|
      col.string :name, :type, :state, :district, :party
      col.date :birthdate
    end
  end
end
```

**All our models will be stored in the Legislators table, and denoted by the type column. This allows us to query our table a number of different ways:**

```ruby
Legislator.all.where(type: "Representative") == Representative.all
Representative.where(state: 'CA') #=> returns all CA Representatives
Legislator.where(state: 'CA') #=> returns all CA legislators
```
etc

###Polymorphic Associations in Active Record

**Polymorphic association allows a model to belong to multiple other models on a single association. Let's say, for example, that we had an `Employee` model, a `Product` model, and a `Picture` model.**

**Both `Employee`s and `Product`s have a `Picture`. We could set up our models so that the `pictures` table has an `employee_id` and a `product_id` table (and allowing those columns to have null values), but this is problematic in itself, and especially if we ever need to add anything else that has a picture (as it would require adding columns to the `pictures` table). To avoid this mess, we can use polymorphic associations.**

**Our models would be set up like this:**
```ruby
class Employee < ActiveRecord::Base
  has_many :pictures, as: :imageable
end

class Product < ActiveRecord::Base
  has_many :pictures, as: :imageable
end


class Picture < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true
end
```

**The migrations for the `employees` and `products` tables would be as normal, and the `pictures` table migration would be as follows:**
```ruby
class Picture < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.id :imageable_id
      t.string :imageable_type
    end
  end
end
```
**This can be further simplified using `references`:**
```ruby
class Picture < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.references :imageable, polymorphic: true
    end
  end
end
```
