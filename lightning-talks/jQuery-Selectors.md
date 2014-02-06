## jQuery Selectors

jQuery and CSS go hand in hand (i.e. trying to use jQuery without understanding CSS sucks)

jQuery relies on the structure of CSS to allow you to quickly and easily access elements in the DOM for manipulation, animation, or whatever else you want to do.

### Why do I care?

jQuery selectors allow you to access the precise elements that you want from your HTML document, oftentimes with much less code/less hassle than plain JavaScript.  jQuery selectors offer you the ability to precisely target the exact part of the DOM that you want without writing complicated code.

### What does it look like?

all jQuery selectors begin with this function: $() (same as 'jQuery()')

inside the parentheses, you may have (any or all) of these, just like css selectors:
- tag name => $('p')
- tag ID => $('#nav')
- tag class => $('.first_paragraph')

### Some more interesting jQuery selectors
$('*') - all selector
- selects all elements from the DOM

$('li > ul') - child selector
- selects all li elements that are children of an ul element

$('li:eq(2)') - eq selector
- returns the 2nd li

$(':radio') - radio selector
- returns all radio buttons

$("div:contains('John')") - contains selector
- returns all divs that contain "John"

$("input[@name^=myname]")
- Selects all elements matched by input that have a name value beginning with myname

### Resources 

<a href="http://api.jquery.com/category/selectors/">jQuery API</a><br/>
<a href="http://www.tutorialspoint.com/jquery/jquery-selectors.htm">jQuery Selector Tutorial</a><br/>
<a href="http://www.w3schools.com/jquery/jquery_ref_selectors.asp">jQuery Selector W3 Schools</a><br/>
<a href="http://stackoverflow.com/questions/11503534/jquery-vs-document-queryselectorall">jQuery vs document.querySelectorAll</a><br/>
<a href="http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/">jQuery vs JavaScript</a><br/>
