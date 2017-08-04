'use strict';

var useLet = true;

(function initLoop() {
    function doLoop(x) {
        if(!useLet) {
            i = 3; /*this will affect the i variable in the for loop if we use the var instead of let*/
        }
        console.log('loop: ', x);
    }

    // the let keyword deals with javascript's not supporting block level scoping   
    // using var instead of let will cause an infinite loop
    // since i is accessible outside of the for loop
    for(let i = 0; i < 10; i++ ) {
        doLoop( i + 1 );
    }
    

})();
