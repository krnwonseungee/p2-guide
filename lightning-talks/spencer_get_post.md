GET - Requests data from a specified resource

Query strings are sent to the URL of the GET request.

For example, Craigslist gives you editing rights for a particular post if you know the exact link to that post. This is an example of security through obscurity - you're hoping that a malicious user won't be able to find unique post addresses.

GET requests can be cached GET requests remain in the browser history GET requests can be bookmarked GET requests should never be used when dealing with sensitive data GET requests have length restrictions GET requests should be used only to retrieve data

POST - Submits data to be processed to a specified resource

Query strings are sent to the HTTP form data body within POST requests.

For example, when you post on Facebook onto someone's wall you are submitting a POST request to alter data on the server.

Some caveats on POST requests:

POST requests are never cached POST requests do not remain in the browser history POST requests cannot be bookmarked POST requests have no restrictions on data length POST requests require a form submission so reloads will be re-submitted.
