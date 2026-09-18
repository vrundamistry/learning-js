const user = {
    username: "Jhon",
    loginCount: 5,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);



//--------- constructor function ---------
// constructor function gives new instant everytime
// 'new' keyword create empty object which is called instance


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Hello, ${this.username}`)
    }

    return this
}

const userOne = new User("Jhon", 4, true)
const userTwo = new User("Den", 6, false)

console.log(userOne.constructor)
console.log(userTwo)