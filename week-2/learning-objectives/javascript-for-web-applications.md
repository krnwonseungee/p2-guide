# JavaScript for Web Applications

While Javascript the _language_, is quite small (if slightly ugly), the
browser's API is both larger and more complex.

Enter [jQuery]! The jQuery library implements a [facade] over each browser's
API (sadly they do not all export the same API) that serves two purposes: the
code written for it works unmodified in all the major browsers; and the facade
API itself is cleaner and easier to use.

[jQuery]:http://jquery.com/
[facade]:http://en.wikipedia.org/wiki/Facade_pattern

Browsers are huge pieces of software that can do zillions of things (text
display, graphics display, video/audio, networking, event capture etc.). jQuery
does not provide a facade over _all_ the browser's APIs, it focuses on a few
major areas:

1. Searching a pages tree of html elements (the dom)
1. Manipulating said tree
1. Binding interactive events such as "click" to custom pieces of code
1. "AJAX" - making HTTP requests over the network from whithin a page context
1. Animating elements by modifying their appearance properties in a tight loop

Many programmers prefer to use separate libraries for each of these tasks - as they can be studied and debugged in isolation - however, jQuery is still the most popular solution and worth understanding for that reason alone.

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
