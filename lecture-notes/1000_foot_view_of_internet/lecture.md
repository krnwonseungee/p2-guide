1000 Foot View of the Internet from a Networking Point of View
==============================================================

1.  Why did you come to dev boot camp
  1.  To be come a "Web programmer"
  1.  So you spent phases 0 and 1 becoming programmers: recursion, algorithms,
      etc.
  1.  So now that means we need to talk about the "web" part.
1.  What is the web?
  1.  "An application built on the Internet"
  1.  Inter-Net(work)
  1.  Network
  1.  What is a "network?"
  1.  System by which computers communicate with each other.
1.  How?
  1.  This is the discipline known as "networking"
  1.  We will not cover it in extreme depth, this is dev boot camp, not
      networking boot camp.  But a basis is helpful
  1.  Introduce [OSI Model Diagram][OSI].  This describes how data moves across
      a network.  Supplemental [Microsoft OSI graphic][MSOSI]
    1.  Physical layer (cables)
    1.  Data link (the network cards)
    1.  Clump these two together into the DOD4 classification "Network"
    1.  Network -&gt; IP (IP addresses, ports) where the computer is and what port
        it's responding on
        * Port: a place where a network type of traffic goes (The "mailbox"
          where data packets are received).
        * Basic addressing("IP address")
        * **Packet**:  A bundle of data to be sent across the network
    1.  Transport (TCP)
        * Makes sure the data packets get where they were going wholly, in the
          correct order
        * Thus the "TCP/IP" most of you have heard of.
        * This is the DOD4  Host To Host and Internet sections
    1.  Lastly the data streams that travel over the physical, and whose
        integrity is validated by the previous two layers have a conversation
        that conforms to a certain standard: what language they support, what nouns and
        verbs they know of.  That is a "protocol" like HTTP (for web traffic) or FTP
        (for moving files) or SMTP (for sending email)
1.  This whole picture is the "plumbing" on which packets travel on the
internet

## Diagram

Draw a series of pipes that support a "cloud".  The pipes are this networking
layer and the cloud is the internet through which data flows.  Now draw a
client on the left of the cloud and a server on the right.  Thus a client can
send a **request** through the cloud and the server can return a **response**

## HTTP

The protocol for sending web traffic is HTTP

It is stateless.  Its function is to respond to a request with a stream of
data.

Under the covers, all browsers do, when you load up a page like
`http://devbootcamp.com` is access the HTTP port of the server at
`devbootcamp.com` (80) and issue the folowing request:

`GET / HTTP/1.1`

They receive a stream of HTML.  The browser gathers that stream of tags and
then uses it to display an HTML document.

This dialog is the "request/response cycle"

## Phase 2 and request response

Since we're not covering networks (*x out cloud*) and we're not covering building
browsers (*x out the client machine on the left of the cloud*), you can assume
we'll be talking about web servers.

In phase 2, since you now know Ruby, we're going to build a web server that
receives requests from clients and which returns HTML.

The server "skeleton" is called Sinatra and, through the challenges, you'll be
building its ability to respond to a variety of requests.

Your challenges today give you a slow introduction to that web server.  We'll
talk more about the request / response cycle in detail tomorrow.

[OSI]: http://www.escotal.com/Images/Network%20parts/osi.gif
[TCP]: http://en.wikipedia.org/wiki/Transmission_Control_Protocol
[MSOSI]: http://technet.microsoft.com/en-us/library/cc786128(v=ws.10).aspx
[IP]: http://en.wikipedia.org/wiki/Internet_Protocol
