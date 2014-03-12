#What is the 'params' hash?

###Data can come from the user's browser when they request a page. 

**In Sinatra (or RoR, others), we can access this data through the params hash thanks to Rack (a webserver interface)**

##Where are the params coming from?
**2 ways are most common:**

####1: HTTP GET request:  
In this case, the params are **encoded in the URL** (i.e sent as a "query string")

**example:**

*http://www.example.com/?key1=val1&key2=val2*

Everything following the "?" is part of the query string. (The "?" is used as a seperator and is not considered part of the query string)

####2: HTTP POST request:  
Here, the parameters are not sent in the URL but instead are in the **request body**

Usually, the request body uses the same format as a query string to store the POST variables, e.g. 
*key1=val1&key2=val2*

So if you broke open the raw content of an HTTP Post, you might see something like this:

```
POST /path/script.cgi HTTP/1.0
From: frog@jmarshall.com
User-Agent: HTTPTool/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 32

key1=val1&key2=val2
```
Above, the POST variables are stored as key-value pairs in the body, seperated from the header content by a blank line.

##How do they become the params hash we work with?
####Rack parses the query string internally to create a hash!
Rails uses Rack to parse them, so it’s (mostly) the same in Sinatra, Padrino or your ruby web framework of choice as well.  Essentially, Rack just uses standard ruby code to parse the parameters (e.g. query string) by splitting on ampersand and semicolon. It then uses other methods to create the hash based on those params.



##Resources 
* [Blog post going over how Rack breaks up querey string into hash](http://codefol.io/posts/How-Does-Rack-Parse-Query-Params-With-parse-nested-query)
* [Link to the Rack source code (Ruby), querey string -> params hash methods near top](https://github.com/rack/rack/blob/master/lib/rack/utils.rb)
* [RoR guide on parameters](http://guides.rubyonrails.org/action_controller_overview.html#parameters)
* [How are params sent in a POST request?](http://stackoverflow.com/questions/14551194/how-are-parameters-sent-in-an-http-post-request)
* [Rails params explained](http://stackoverflow.com/questions/6885990/rails-params-explained)