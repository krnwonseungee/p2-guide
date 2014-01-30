## HTTP Requests and Web Browsers

###Salient Points
- PUT and DELETE are (apparently) supported by all the major browsers (though one can never be certain about IE)
- Restriction actually comes from HTML 4 (and even HTML 5, currently) on what values the method attribute can take.  Currently it is only "get" or "post"
- There are ways around the restriction with tools like Sinatra

###Sidestepping Restrictions on your HTML
When using Sinatra, if you would like to PUT or DELETE anything, you have to "trick" the form into doing what you want since "put" and "delete" aren't valid values for the method attribute.  Instead, list the method as "post" and hide the input necessary for the desired action in the form, like the example below (sourced from http://mikeebert.tumblr.com/post/26877173686/quick-tip-using-put-and-delete-in-sinatra)

```html
<form method="post" action="/tasks/<%= @task.id %>"> 
    <input type="hidden" name="_method" value="put">
    #.. all of your form fields
    <button type="submit">Update</button>
</form>
```

The desired HTTP request type goes into the value attribute of the hidden form input.  Thanks to Ruby awesomeness, this setup essentially allows you to circumvent the default method (in this case "post") with the new one you specified ("put").

###Useful Resources
Stack Overflow QA on the topic of http and browsers:<br>
http://stackoverflow.com/questions/165779/are-the-put-delete-head-etc-methods-available-in-most-web-browsers<br>
HTML5 Documentation (recommendation) from W3C:<br>
http://www.w3.org/TR/2013/CR-html5-20130806/forms.html#attr-fs-method.<br>
Awesome Blog Post (Sinatra-specific):<br>
http://mikeebert.tumblr.com/post/26877173686/quick-tip-using-put-and-delete-in-sinatra


###Just for fun...browser meme

<img src="http://global3.memecdn.com/Guess-The-Web-Browser_c_92447.webp" alt="funny browser meme">
