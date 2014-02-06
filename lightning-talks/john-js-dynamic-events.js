// Sometimes we want to do the following things in Javascript or jQuery:
//   1. Create new DOM elements on the fly ("dynamically")
//   2. Bind event handlers to these newly created elements
// When we try to do this, however, we find that event handlers will not bind // to dynamically generated elements. For example:


// Given this initial list with a static element:
<button id="myButton">Add New li</button>
<ul id="myList">
    <li>This is a static list element.</li>
</ul>

// Let's dynamically append new <li>s when the user clicks myButton:
$("#myButton").click(function () {
    var dynamicLi = "<li>This is a dynamically added list element</li>"
    $('#myList').append(dynamicaLi)
});

// When the user clicks <li>s in myList, we expect this event handler to turn // the <li>s red:
$("#myList li").on('click', function () {
    $(this).css('color', 'red')
});

// Our "turn red" event handler works with the static <li>, but not the 
// dynamically generated ones. Why is this?

// The problem is that the event handler is only bound to elements that were
// on the page when the script loaded. Thus the "turn red" event handler will
// work with the static <li>, since it was on the page all along; but not with // the new, dynamically generated <li>s.

// The solution to this problem is to use a technique called event delegation.
// Event delegation allows us to attach an event handler to a parent element, // that will run for all children matching a selector, whether those children // exist now or are added in the future. All this requires is a slight change // to the syntax of our "turn red" event handler:

$("#myList").on('click', 'li', function () {
    $(this).css('color', 'red')
});