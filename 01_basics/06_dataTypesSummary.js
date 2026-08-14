/* Primitive Data Type (Call By Value) */

// 7 Types: 
// String, 
// Number, 
// Boolean, 
// null [completely empty not 0], 
// undefined [variable declared, memory space allocated but not decided what is inside  eg: let userEmail;], 
// Symbol [Unique],
// BigInt


const score = 20;
const scoreValue = 20.5;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);
// console.log(id === anotherId);

//const bigNumber = 454554646467567657n;




/* Reference(Non Primitive) Data Type (Call By Reference) */

// Array, Objects, Functions

const fruits = ["Mango", "Plum", "Guava"];

let myObj = {
    name: "vrunda",
    age: 30
}

function helloWorld() {
    console.log("Hello World");
}
helloWorld();


const myFunction = function () {
    console.log("Hello World");
}


// console.log(typeof fruits);
// console.log(typeof myObj);
// console.log(typeof myFunction);





// ############### Memory ################

// Stack Memory (Primitive) [Call by Value]

let myName = "Vrunda"

let anotherName = myName
anotherName = "Rinku"

console.log(myName)
console.log(anotherName)




// Heap Memory (Non-Primitive) [Csll by Reference]

let userOne = {
    email : "user@test.com",
    age : 30
}

// let userTwo = {
//     email : "user2@test.com",
//     age : 45
// }


let userTwo = userOne;
userTwo.email = "rinku@test.com"

console.log(userOne.email)
console.log(userTwo.email)