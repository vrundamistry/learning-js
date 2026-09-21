// let myName = "test       "
// let mychannel = "chai     "

// console.log(myName.trueLength); // trueLength is method that we need to create



//  Array     Function     String
//             Object
//              null
//


let myHeros = ["thor", "spiderman", "hulk"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    hulk: "lifting",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is available in all objects`)
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

// heroPower.hitesh()
// myHeros.hitesh()

// myHeros.heyHitesh()
// heroPower.heyHitesh()


//------------- inheritance -------------

const User = {
    name: "test",
    email: "test@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignments',
    fullTime: true,
    __proto__: TeachingSupport // here TASupport access all property of TeachingSupport
}

Teacher.__proto__ = User // here Teacher access all property of User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // here TeachingSupport access all property of Teacher


//--------------------------


let userName = "Denial"

String.prototype.trueLength = function(){
    console.log(`true length is: ${this.trim().length}`)
}

userName.trueLength()

"test   ".trueLength()