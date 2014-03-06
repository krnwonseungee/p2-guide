var forEach = function ( list, action ) {
  for (var i = 0; i < list.length; i++) {
    action(list[i]);
  }
}
var map = function (internalFunction, list) {
  var result = [];
  forEach( list, function (item) {
    result.push( internalFunction( item ) );
  });
  return result;
}
var doubleIt = function (item) {
  return item * 2;
}
var trippleIt = function (item) {
  return item * 3;
}

var someData = [1,2,3,4,5];
console.log(map( doubleIt, someData));
console.log(map( trippleIt, someData));


