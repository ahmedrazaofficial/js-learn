///////////////     IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)   //////////////////////////////

(function chai() {
    //named iife
    console.log(`DB CONNECTED`);
})();   //jab 1 se zyada bar iife use karna hoga toh yah lagana parega lazmi  ;

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("ahmed");

(() => {
    console.log(`DB CONNECTED TWO`);
})()