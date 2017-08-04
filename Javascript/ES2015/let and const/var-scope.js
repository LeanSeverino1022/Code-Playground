
// lets see how to use the let and const keyword

//the use strict statement prevents you from making mistakes in your code coz it will throw and exception
// at runtime
'use strict';

var hello = 'hello';

function sayHi() {
    var hello = 'hi';
    console.log(hello);
}

sayHi();
console.log('hello');
