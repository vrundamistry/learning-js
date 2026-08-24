const vegetables = ["potato", "onion", "peas", "tomato"];
const fruits = ["banana", "apple", "grapes"];

//vegetables.push(fruits);
// console.log(vegetables);
// console.log(vegetables[4][1]);


const all = vegetables.concat(fruits);
//console.log(all);

//sprade array 
const all_thing = [...vegetables, ...fruits]; 
// console.log(all_thing);


//----------------- flat ---------------------

// return new array with all sub-array elements concatenated into it recursively up to specified depth.
// depth: specifying how deep a nested array structure should be flattened. Default = 1

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_arr = another_arr.flat(Infinity);
//console.log(real_another_arr);



// console.log(Array.isArray("Vrunda"));
// console.log(Array.isArray(["Vrunda"]));


//--------------------- from ---------------------

// create an array from an iterable object


// Array from a String
console.log(Array.from("Vrunda"));
console.log(Array.from({name: "Vrunda"}));

const fSet = new Array("mango", "banana", "grapes", "banana");
// console.log(Array.isArray(fSet));
// console.log(Array.from(fSet));


// Array from a Set
const set = new Set(["foo", "bar", "baz", "foo"]);
console.log(Array.from(set)); // [ "foo", "bar", "baz" ]


// Array from a Map
const mapper = new Map([["name", "abc"], ["age", "20"]]);
console.log(`mapper: ${Array.isArray(mapper)}`);
console.log(Array.from(mapper.keys()));
console.log(Array.from(mapper.values()));



//--------------------- of -----------------------

// return array from set of elements

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));
