# STI and Polymorphism

##A Problem:
###Object-relational impedance mismatch!
**
Since (most) databases don't support inheritance, there is an issue when trying to map objects (object-oriented paradigm) to database tables (relational paradigm).  
Another way of putting it: when the object-oriented paradigm of software development is shoe-horned into the relational paradigm of mathematics, there are issues.**

## How it's addressed:
###STI : Single Table Inheritance

Single table inheritance (STI) is a software pattern described by Martin Fowler that tries to address O/R impednace mismatch.

STI is basically the idea of using a single table to represent multiple models that inherit from a base model.  This is an example of Object-Relational Mapping (ORM) works.  ActiveRecord is an ORM framework.

This single table represents that inheritance hierarchy of classes as a single table that has columns for all the fields of the various sub-classes:

![image](http://i.imgur.com/Kj8q5nB.gif)

Caution: Be careful when using single table inheritance. Since all the data from all the sub-types is include in one table, you can end up with a lot of "null"s scattered throughout the table. These ultimately increase the size of the table and you could end up with a scaling problem on your hands.

###Polymorphic Associations
Polymorphic association is a term used in discussions of Object-Relational Mapping with respect to the problem of representing in the relational database domain, a relationship from one class to multiple classes.

Using polymorphic association, a model can belong to more than one other model, on a single association.

Polymorphic associations allow you to have a model associated with more than one other model without the use of a join table. This works by adding type and id field to the table of the model you wish to make polymorphic.

## Example


### Resources
[Brief description of STI](http://www.martinfowler.com/eaaCatalog/singleTableInheritance.html)

[Blog post on STI in Rails](http://www.therailworld.com/posts/18-Single-Table-Inheritance-with-Rails)

[RoR Guide for AR - section on polymorphic associations](http://guides.rubyonrails.org/association_basics.html#polymorphic-associations)

[Tangentially related -> Coding Horror: Object-Relational Mapping is the Vietnam of Computer Science](http://blog.codinghorror.com/object-relational-mapping-is-the-vietnam-of-computer-science/)

[polymorphic associations in rails (AR)](http://richonrails.com/articles/polymorphic-associations-in-rails)