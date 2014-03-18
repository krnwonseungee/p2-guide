# jQuery Effects

## Definition
You can use jQuery effects to animate elements.  Some examples of common jQuery effects include 'hide', 'show', and 'toggle'.  You can also create custom animations.  This is done via the animate() effect.

For a given effect, you can set the duration for the animation.  Default value is 400ms.  "Fast" and "slow" correspond to 200ms and 600ms respectively.  Any numeric value can be used, however.

Animations can also call other animations so that you can chain together different animations.

Below is an example of the toggle effect being triggered when the click event occurs.  If you wanted to chain together another animation, you would add another method call on the 3rd line below.

```java
$("#clickMe").click(function()) {
  $("#book").toggle("slow",function() {
})};
```

## Example
There are many custom animations that can be found online.  A good example is called the zoomer effect, which zooms into an image on hover.  This is what Google does for its Image Search.  Custom animations would be called with the animate() method.

### Resources
http://api.jquery.com/category/effects/