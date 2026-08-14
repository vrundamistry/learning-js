const score = 200
console.log(score)


const balance = new Number(300);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 32.6576;
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toPrecision(2));


const amount = 10000000;
// console.log(amount.toLocaleString())
// console.log(amount.toLocaleString('en-IN'))



//--------------------- Maths ---------------------

 console.log('/-----------------------------/')

//  console.log(Math)

//  console.log(Math.abs(-9))
//  console.log(Math.round(8.6))
//  console.log(Math.ceil(8.6))
//  console.log(Math.floor(8.6))
//  console.log(Math.min(6, 1, 3, 2))
//  console.log(Math.max(6, 1, 3, 2))

console.log(Math.random()); // gives value between 0 and 1
console.log(Math.random()*10); // shift one value to left if multiply by 10
console.log((Math.random()*10) + 1); // gives value between 1 and 9 when do +1
console.log(Math.floor(Math.random()*10) + 1); //


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)