/*
 * In Javascript, we often want to *namespace* our work.  We create a global,
 * unique name (this is the "Singleton" design pattern) and bolt work onto it.
 * You can think of it as being the same as a ruby class which has nothing but
 * class methods and cannot be initialized (hmm, that's actually the exact
 * definition of a Ruby Module, that's something you might want to play with
 * some day!).
 */

var MyJQueryWrapper = {};

MyJQueryWrapper = {
  oscillationTimes: 1000,
  oscillationValue: 100
}

MyJQueryWrapper.turnSelectorBlue = function(selectorString) {
  $(selectorString).css("background-color", "blue");
};

MyJQueryWrapper.turnSelectorRed = function(selectorString) {
  $(selectorString).css("background-color", "red");
};

MyJQueryWrapper.induceSeizures = function(count) {
  if (!count) { count = 0; }

  if (count == this.oscillationTimes) { return; }

  if (count % 2 == 0) {
    this.turnSelectorBlue("body");
    setTimeout(function(){MyJQueryWrapper.induceSeizures(count+1)},this.oscillationValue);
  } else {
    this.turnSelectorRed("body");
    setTimeout(function(){MyJQueryWrapper.induceSeizures(count+1)},this.oscillationValue);
  }
}

// Plug this into a web page via the console and then have some real fun with
// it! by executing MyJQueryWrapper.induceSeizures();
