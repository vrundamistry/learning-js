// Immediately Invoked Function Expression (IIFE)


// named IIFE
(function db_connect(){
    console.log(`DB CONNECTED`);
})();

// ()()  
// () for function wrap   () for execution


( () => {
    console.log(`This is arrow function check.`)
} )();


( (name) => {
    console.log(`This is arrow function check ${name}`)
} )('Jhon');