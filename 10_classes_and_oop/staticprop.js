class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const user1 = new User("Jhon")
// console.log(user1.createId()) // due to static it gives error


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email        
    }
}

const user2 = new Teacher("Den", "den@test.com")
user2.logMe()
console.log(user2.createId()) // due to static it gives error