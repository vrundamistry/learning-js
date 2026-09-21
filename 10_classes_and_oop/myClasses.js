// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("Jhon", "jhon@test.com", "1234")

// console.log(user1.encryptPassword())
// console.log(user1.changeUserName())



//--------- behind the scene ---------

function User (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new User("Sam", "Sam@test.com", "987")

console.log(user2.encryptPassword())
console.log(user2.changeUserName())
