Adapters convert the interface of one class to work with that of another.

Wrappers are an example of this behavior (can be used to access libraries).

A client would wrap an access method on the target through an adapter which would do the process of translating the interfaces between the two classes.

This happens because of legacy code (i.e. it has some functionality you want, but you are unable to talk directly to it).

This can be done through inheritance or composition.

A class might expect parameters in a certain order like a legacy rectangle class (x,y,w,h).  An adapter would be called to convert some other ordering (x1,y1,x2,y2) to this legacy ordering.

This assumes that you can't change the existing target code base.  You must adapt it to your needs.

Software that adapts that 3rd party libraries have a middle adapter layer to decouple the application from the library.

Adapters could be relevant when working with APIs.  You have to adapt some part of the API to suit an external need.

The adapter inherits from the adaptee (legacy class).

Can use inheritance or composition to do adapting.

A wrapper class (adapter) could do something like convert the format of a date into the format that the client wants.

Difference between adapter and decorating is difference between extending the existing classes features, and adding new features.

Difference between this and bridge pattern is that a bridge pattern (between 2 classes) is implemented and planned out beforehand.

Diffence between this and facade is that a facade simplifies an existing interface/class.