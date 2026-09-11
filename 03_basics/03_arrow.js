const user = {
    username: "Vrunda",
    age: 33,
    welcomeMessage: function(){
        console.log(`${this.username}, wolcome to website.`)
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Jhon";
// user.welcomeMessage();

// console.log(this);



//------ arrow function declaration ------
// () => { }



//--------------------------------------


// function test(){
//     let username = "Jhon";
//     console.log(this.username)
// }

// const test = function(){
//     let username = "Jhon";
//     console.log(this.username)
// }

const test = () => {
    let username = "Jhon";
    console.log(this.username)
}

// test()


//-------------------------------------

// // explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// // implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// console.log(addTwo(3, 5));


const addTwo = (num1, num2) => ({username: "Jhon"})
 
console.log(addTwo());


