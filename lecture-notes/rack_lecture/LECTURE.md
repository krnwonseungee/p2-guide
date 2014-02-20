# Understanding the Request / Response Cycle

# Introduction

At its heart, web applications engineering is a very simple proposition: send a
certain standardized **request** on a standard port to a web server, get a
string, or **response** of HTML, Javascript and CSS back.  Both the request and
the response conform to certain standard behaviors; that is, they conform to a
*protocol* in this case the HTTP protocol.

The internet is made up of a vast series of layers of protocols each of which
has certain requirements, handshakes, and rules of order.   Some of these
you're quite familiar with: HTTP, SMTP, IMAP, etc.  Others of these may be less
familiar to you (FTP, POP, etc.).  Yet **all** of these higher-level protocols
function over the basic routing protocol of the internet: [TCP/IP][].

By using some basic TCP/IP tools, some dating to the very beginnings of the
internet itself, we can gain insight into the request response cycle in a way
that strips away a lot of the "magic" that browsers layer over this very simple
transaction.

# Chrome inspector

Chrome can be used to see what queries are being made, what their response is,
etc.

* Open Chrome anonymous window
* Open dev tools
* Observe the header

# Telnet

(history of telnet, telnet v. ssh, why use one over the other)

Telnet can be used to test connections:

```
telnet google.com 80
GET http://www.google.com/search?q=new+order HTTP/1.0
```

This demonstrates that web pages can be **requested** by means of these simple
protocols.

----

OK, so that's the case that we're sending things.  We can send queries and
parameters and they're received, but what handles the request once it's gotten
there.

## Web Server

## Minimal web server:  Rack

* A conformance interface that specifies a method be responded to `call` and
  that it return an `each`-able array of three elements
* tie back to telnet results
* So, at the top of this stack we have to return 3 arrays that will be bundled
  and returned as that response set
* Middleware technology, it can be though of as a before-after filters for HTTP requests
* **aside** [Beautiful document](http://chneukirchen.org/blog/archive/2007/02/introducing-rack.html)
* **so many pearls of great wisdom** A standard interface (ties to testing!)

## Benefits

* convention over configuration
* middlewares can be nested


[TCP/IP]: http://en.wikipedia.org/wiki/Internet_protocol_suite
