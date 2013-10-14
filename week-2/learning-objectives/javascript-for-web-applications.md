# JavaScript for Web Applications

While Javascript, as a language, is quite small (if slightly ugly), the amount
of complexity that comes when you attempt to make browser-based applications
that work across all browsers is both hard and complex.

Enter [jQuery](http://jquery.com/)! jQuery is a cross-browser compatible library
that provides a standard interface for:

1. Retrieving elements from the DOM
1. Manipulating said elements
1. Binding and triggering events
1. Making AJAX requests

While jQuery has some serious flaws, it's pretty much everywhere and should be
learned in spite of how awful it is.

## :+1:
1. I can use jQuery to retrieve elements from the DOM using CSS selectors
1. I can use jQuery's [traversal methods](http://api.jquery.com/category/traversing/)
   to find elements relative to the given element
1. I can bind events to elements I've pulled from the DOM
1. I can trigger events on elements I've pulled from the DOM
1. I can use jQuery to append and replace elements on the page


## :+1: :+1:
1. I can use `querySelectorAll` to retrieve elements without jQuery
1. I can use `addEventListener` to bind events without jQuery
1. I can explain the difference between an HTMLElement and a JQueryHTMLElement
1. I use jQuery to implement Event Delegation with the `on` function
1. I separate my view concerns from my data verification concerns
1. I use AJAX to retrieve partials from the server and replace or append
   them to a website

## :+1: :+1: :+1:
1. I separate my view concerns from my data retrieval and storage concerns
1. I can do AJAX without jQuery
1. I use AJAX to retrieve JSON from the server and then modify the page based on
   the JSON
1. I use MustacheJS or underscores templating library to convert JSON to HTML
1. I can use jQuery to bind and trigger events on plain old JavaScript objects
