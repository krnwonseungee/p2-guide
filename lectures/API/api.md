##API's Suck - but are still needed


### Find an API
 * Search [Programmable Web: ](http://www.programmableweb.com/)
 * See if the applications you love have an API

 ### Test the API
 Make sure you can send a request and get a response using one of the following tools:

  * Use [CURL](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/curl.1.html)
  * Use [Apigee Console :](https://apigee.com/console/others)
  * Use [httparty](https://github.com/jnunemaker/httparty)


### Protect Your Code
API calls can go wrong. You should wrap all API interaction in it's own class / module and use Exception Handling.

  * [Class Exception](http://www.ruby-doc.org/core-2.1.0/Exception.html)

Use Enviornment Variable to store access tokes.

  * In a `.yml` file using the [YAML.load() method](http://www.ruby-doc.org/stdlib-2.1.1/libdoc/yaml/rdoc/YAML.html)
  * In a `.env` file using the [dotenv](https://github.com/bkeepers/dotenv) gem
  * Directly in your local environment
    * `export STRAVA_TOKEN=x`
    * `echo $STRAVA_TOKEN`


