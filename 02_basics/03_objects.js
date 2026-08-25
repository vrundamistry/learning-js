// object declarsation type
// 1. literal - (not singleton)
// 2. constructor - (singleton)


//------- singleton --------

// when create object with constructor then singleton become object


// when create object with literal then it is not singleton but it has multiple instance




//------------- object literals ---------------

const mySymbol = Symbol("key1");

const jsUser = {
    name: "Vrunda",
    "full name": "Vrunda Mistry",
    age: 33,
    email: "vrunda@test.com",
    location: "Surat",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Thrusday"],
    [mySymbol]: "mykey1",   
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);


jsUser.email = "vrunda@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "vrunda@outlook.com";

// console.log(jsUser);




jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting);

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
