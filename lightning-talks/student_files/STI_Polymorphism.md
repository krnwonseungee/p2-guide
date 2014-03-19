# STI and Polymorphism
--------------------------------------------------

##Core Concept:
##*Mixing *OBJECT-ORIENTED* concepts and programming languages with *RELATIONAL* databases creates a lot of problems!*
</br>
These problems have a name:
#> Object-relational impedance mismatch <

**Object-relational impedance mismatch is the label for a set of problems (tehcnical, conceptual, and cultural) encountered when using a relational database to store (the state of) objects from software written in an object-oriented programming language**

Since (most) databases don't support inheritance, issues arise when trying to map objects (object-oriented paradigm) to database tables (relational paradigm).  Another way of putting it: when the object-oriented paradigm of software development is shoe-horned into the relational paradigm of mathematics, there are incompatibilities.

**A lot of thought has gone in to various ways of working with relational databases using OO concepts and programming languages.
**

## STI and Polyorphism are 2 Ways of getting some OO behavior in a Relational database:
###STI : Single Table Inheritance

Single table inheritance (STI) is a software pattern described by Martin Fowler that tries to address O/R impedance mismatch.

STI is basically the idea of using a single table to represent multiple models that inherit from a base model.  This is an example of Object-Relational Mapping (ORM) works.  ActiveRecord is an ORM framework.

###example:
This single table represents that inheritance hierarchy of classes as a single table that has columns for all the fields of the various sub-classes:

![image](http://i.imgur.com/Kj8q5nB.gif)

In ActiveRecord, this is accomplished by adding a "type" column to your table that holds the name of the parent model.

**CAUTION:** Be careful when using single table inheritance. Since all the data from all the sub-types is include in one table, you can end up with a lot of "null"s scattered throughout the table. These ultimately increase the size of the table and you could end up with a scaling problem on your hands.

###Polymorphic Associations
Polymorphic association is a term used in discussions of Object-Relational Mapping with respect to the problem of representing in the relational database domain, a relationship from one class to multiple classes.

Using polymorphic association, a model can belong to more than one other model, on a single association, without the use of a joing table.

Here's an example from the RoR guide:

```ruby
class Picture < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true
end
 ```
 
 ```ruby
class Employee < ActiveRecord::Base
  has_many :pictures, as: :imageable
end
 ```
 
 ```ruby
class Product < ActiveRecord::Base
  has_many :pictures, as: :imageable
end
```

You can think of a polymorphic belongs_to declaration as setting up an interface that any other model can use. From an instance of the Employee model, you can retrieve a collection of pictures: @employee.pictures. Similarly, you can retrieve @product.pictures.

Under the hood in Active Record, this works by adding type and id field to the table of the model you wish to make polymorphic.


### Resources
[Article on the broader scope of O/R impedance mismatch](http://c2.com/cgi/wiki?ObjectRelationalImpedanceMismatch)

[Brief description of STI](http://www.martinfowler.com/eaaCatalog/singleTableInheritance.html)

[Blog post on STI in Rails](http://www.therailworld.com/posts/18-Single-Table-Inheritance-with-Rails)

[RoR Guide for AR - section on polymorphic associations](http://guides.rubyonrails.org/association_basics.html#polymorphic-associations)

[Tangentially related -> Coding Horror: Object-Relational Mapping is the Vietnam of Computer Science](http://blog.codinghorror.com/object-relational-mapping-is-the-vietnam-of-computer-science/)

[polymorphic associations in rails (AR)](http://richonrails.com/articles/polymorphic-associations-in-rails)