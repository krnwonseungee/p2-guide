/* ignore me mocking ajax... */

$ = {};
$.ajax = function() {
  return {
    then: function(fn) {
            console.log("We're making a slow ajax call...");
            var  imaginaryAjaxNoise = { hello: "world" }
            fn.call(this, imaginaryAjaxNoise);
          }
  }
};

/* ignore above here */


function Pager(number) {
  this.number = arguments[0] || "415-555-1212"
} 

Pager.prototype.notify = function(stuffy) {
  var number = this.number;
  var self = this;
  //console.log("Paging " + this.number + " " + stuffy);
  $.ajax('/foo/something', {type: 'POST'}).then(function(response) {
    console.log("hayayyyyayayyaay" + this.constructor);
    console.log("hayayyyyayayyaay2" + self.constructor);
    console.log("I know what " + stuffy + " is.   The number is " + number);
    console.log("for Chermaine!! ");
    console.log(response);
  });
}

pager = new Pager();
pager.notify("hit me up dre");


/* OR -- IS SAME THING AS */

//otherPager = new Pager('415-555-5555');
//Pager.prototype.notify.apply(otherPager, ["Gimme a beat!"]);
