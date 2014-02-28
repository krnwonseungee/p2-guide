function inner() {
  console.log("Inner was called");
  return "returned from inner"
}

function outer(fromMain) {
  var outerInteger = 2;
  console.log("Outer got something from main(" +
    fromMain + ") and has its own(" + 
    outerInteger + ")\n");
  return inner();
}

function main() {
  var year = 2014;
  console.log("Hello Banana Slugs (" + year + ") vintage\n");
  var outerResult = outer(year);
  return function(cohort) {
    console.log("Behold " + cohort + "!  The power of closures (" + year + ")!  Look even inner lives on! ==> " + outerResult);
  }
}

// year, outerResult are dead at this point!

console.log(main()("banana slugs"));
