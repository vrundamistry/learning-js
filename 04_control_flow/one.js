// if

const isUserLoggedIn = true
const temperature = 45

// if( temperature === 42 ){
//     console.log(`more than 40`)
// }else{
//     console.log(`not more than 40`)
// }

// <, >, <=, >=, ==, !=, ===, !== 


//-----------------------------


// const score = 200;

// if( score > 100 ){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

// // console.log(`User power: ${power}`)


//-----------------------------


// const balance = 1000

// // implicit code ( without {} )
// if( balance > 500 ) console.log("test");
// // if( balance > 500 ) console.log("test"), console.log("test2"); // not preferable syntax or code for multiline for implicit code

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) { 
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less then 1200")
// }


//-----------------------------


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if (userLoggedIn && debitCard && 2==3) {
    console.log(`Allowed to buy course`)
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log(`User Logged In`)
}