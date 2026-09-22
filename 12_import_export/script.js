// ------------- import all function individually -------------

// import { multiply, addition as add } from "./utility.js";

// const result = multiply(2, 4, 5)
// console.log(result)


// const result2 = add(2, 5)
// console.log(result2)



// ------------- import all function together -------------

import * as utility from './utility.js'

const result = utility.multiply(4, 5, 3)
console.log(result)

const result2 = utility.addition(4, 6)
console.log(result2)


console.log(utility.UNIQUE_ID)



// ------------- import default function -------------

// function declare with default export will import without {} and can give any name in import

import addition1 from './utility.js'
import add from './utility.js'

const addResult = addition1(3, 9, 8)
console.log(addResult)

const addResult1 = add(5, 17, 3)
console.log(addResult1)

