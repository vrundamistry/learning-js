function printName(){
    console.log("v");
    console.log("R");
    console.log("U");
    console.log("N");
    console.log("D");
    console.log("A");
}

// printName;

// if we use printName - then it called 'reference'
// if we use printName() - then it called 'execution'


//---------------------------------


// when create function defination with value in parenthesis then that value called 'parameters'
// i.e.function addTwoNumbers(number1, number2){}

// when call function with value then that value called 'arguments' 
// i.e. addTwoNumbers(3, 4);


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
//console.log(`Result: ${result}`);


//---------------------------------


function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vrunda"));

// loginUserMessage(); // if used wthout console.log it print only 'Please enter username'

// console.log(loginUserMessage()); // if used with console.log it print only 'Please enter username' & 'undefined'



function loginUserMessage1(username = "Jhon"){
    if(!username){
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage1("Vrunda"));


//---------------------------------


function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500));


function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice1(200, 400, 500, 800));


//------------ function with object ------------


const user = {
    name: "Jhon",
    age: 35
}

function handleObject(anyObj){
    return `Name is ${anyObj.name} and age is ${anyObj.age}`;
}

// console.log(handleObject(user));
console.log(handleObject({
    name: "Sam",
    age: 32
}));



//------------ function with aaary ------------


const myNewArr = [200, 400, 500, 700];

function returnSecondValue(getArr){
    return getArr[2];
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 500, 300]));