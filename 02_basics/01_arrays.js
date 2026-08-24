//------------ arrays -----------

const myArr = [2, 4, 3, 6, 8];
//console.log(myArr[3]);

const myArr1 = ["apple", "banana", "mango"];
//console.log(myArr1);

const myArr2 = new Array(1, 2, 3, 4, 5);
//console.log(myArr2[3])
//console.log(myArr2);



//----------- array methods ---------
myArr2.push(6)
myArr2.push(7)
myArr2.pop()
console.log(myArr2);


myArr2.unshift(4)
console.log(myArr2)
myArr2.shift()
console.log(myArr2)

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(6))
// console.log(myArr2.indexOf(6))

    
let newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);


//----------- slice, splice --------
console.log("A: ", myArr2);

// const myNewArr = myArr2.slice(1, 3); // [2, 3]
// const myNewArr = myArr2.slice(2, 4); // [3, 4]
// const myNewArr = myArr2.slice(1, 4); // [2, 3, 4]
// const myNewArr = myArr2.slice(0, 3); // [1, 2, 3]
// const myNewArr = myArr2.slice(3, 4); // [4]
// const myNewArr = myArr2.slice(3, 3); // []
const myNewArr = myArr2.slice(3, 2); // []

console.log(myNewArr);
console.log("B: ", myArr2);


// const myNewArr2 = myArr2.splice(1, 3); // [2, 3, 4]
// const myNewArr2 = myArr2.splice(2, 4); // [3, 4, 5, 6]
// const myNewArr2 = myArr2.splice(1, 4); // [2, 3, 4, 5]
// const myNewArr2 = myArr2.splice(0, 3); // [1, 2, 3]
// const myNewArr2 = myArr2.splice(3, 4); // [4, 5, 6]
// const myNewArr2 = myArr2.splice(3, 3); // [4, 5, 6]
// const myNewArr2 = myArr2.splice(3, 2); // [4, 5]
const myNewArr2 = myArr2.splice(4, 2); // [5, 6]


console.log(myNewArr2); 
console.log("C: ", myArr2);


// NOTE: 
// slice - return start postion to (end-1) position and main array remian as it is
// splice - return from start position to total count of end position and main array is rest of return element. e.g if splice(1,4) then 1st position to total 4 count
