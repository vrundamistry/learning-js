class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }

}

const user1 = new User("user1@Test.com", "abcqwe")
console.log(user1.password)
console.log(user1.email)