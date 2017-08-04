'use strict';

// Constants are block-scoped, much like variables defined using the let statement. 

const note = { text: 'This is a constant' };

// this should throw and exception. 
// The value of a constant cannot change through re-assignment, and it can't be redeclared.
var note = { text: 'comment out this line to clear the error in the console' }; /* */

console.log(note);