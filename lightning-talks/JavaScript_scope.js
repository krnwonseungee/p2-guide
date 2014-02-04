// a globally-scoped variable
var a=1;

// global scope
function one(){
    console.log(a); 
}

// local scope
function two(a){
    console.log(a);
}

// local scope again
function three(){
  var a = 3;
  console.log(a);
}

// Intermediate: no such thing as block scope in javascript
function four(){
    if(true){
        var a=4;
    }

    console.log(a); // console.logs '4', not the global value of '1'
}


// Intermediate: object properties
function Five(){
    this.a = 5;
}


// Advanced: closure
var six = function(){
    var foo = 6;

    return function(){
        // javascript "closure" means I have access to foo in here, 
        // because it is defined in the function in which I was defined.
        console.log(foo);
    }
}()


// Advanced: prototype-based scope resolution
function Seven(){
  this.a = 7;
}

// [object].prototype.property loses to [object].property in the lookup chain
Seven.prototype.a = -1; // won't get reached, because 'a' is set in the constructor above.
Seven.prototype.b = 8; // Will get reached, even though 'b' is NOT set in the constructor.



// These will print 1-8
one();
two(2);
three();
four();
console.log(new Five().a);
six();
console.log(new Seven().a);
console.log(new Seven().b);
