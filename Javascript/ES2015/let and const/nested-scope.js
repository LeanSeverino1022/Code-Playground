'use strict';

(function(){
    const student = { name: 'Lex' };

    function createStudent( name ) {
        const student = { name: name };
        return student;
    }

    console.log(createStudent('James')); /* { name: "james" } */
    console.log(student);  /* { name: "Lex" } */

})();

// NOTE: Use let when you need to reassign a variable or scope a variable at the block level