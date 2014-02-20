# Lecture on Sessions (2014-01-30)

##  Sessions

* HTTP is a stateless protocol
* We have to create something that can allow us to preserve some sort of state
  information.
* The session id is a 32 byte long MD5 hash value.

## Hash Structure

* Very random string: To date MD5 is uncompromised, but there have been
  collisions, so it is theoretically possible to create another input text with
  the same hash value.  But this has had no security impact to date.


## The session datum is stored in a cookie

> A cookie, also known as an HTTP cookie, web cookie, or browser cookie, is a
> small piece of data sent from a website and stored in a user's web browser
> while the user is browsing that website. Every time the user loads the website,
> the browser sends the cookie back to the server to notify the website of the
> user's previous activity.[1] Cookies were designed to be a reliable mechanism
> for websites to remember stateful information (such as items in a shopping
> cart) or to record the user's browsing activity (including clicking particular
> buttons, logging in, or recording which pages were visited by the user as far
> back as months or years ago).

Comes from [Wikipedia](http://en.wikipedia.org/wiki/HTTP_cookie)


## Cookie data are passed on each request
