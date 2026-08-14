const name = "vrunda";
const repoCount = 20;

// console.log( name + repoCount + " value")

console.log(`My name is ${name} and my repo count is ${repoCount}`)

// ------------------------------------------

const gameName = new String("Mario");
 
// console.log(gameName[0]) // M
// console.log(gameName.__proto__) // {}

// console.log(gameName.length); // 5
// console.log(gameName.toUpperCase()) // MARIO
console.log(gameName.charAt(3)) // i
console.log(gameName.indexOf('r')) // 2


// ------------------------------------------


const newString = gameName.substring(1, 3) // ar
// const newString = gameName.substring(-4, 3) // if start with -(negative) then it return from 0 to specified end number // Mar

console.log(newString)


// ------------------------------------------


// const anotherString = gameName.slice(1, 3) // ar
// const anotherString = gameName.slice(-3, 5) // rio
// const anotherString = gameName.slice(-4, 3) // ar
// const anotherString = gameName.slice(-2, 5) // io
const anotherString = gameName.slice(-5, 4) // Mari

console.log(anotherString)


// ------------------------------------------


const stringOne = "    rinku   ";
console.log(stringOne)
console.log(stringOne.trim())


// ------------------------------------------


const url = "https://test.com/vrunda%20mistry"
console.log(url.replace('%20', '-')) // https://test.com/vrunda-mistry

console.log(url.includes('vr')) // true
console.log(url.includes('abc')) // false


// ------------------------------------------


const fruits = new String("banana-mango-pinapple");
console.log(fruits.split("-"))
