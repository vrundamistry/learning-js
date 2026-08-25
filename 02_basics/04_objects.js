// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = 1
tinderUser.name = "abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser);



//-------------- object of object ------------
const regularUser = {
    email: "abc@test.com",
    fullname: {
        userfullname: {
            firstname: "vrunda",
            lastname: "mistry"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)



//-------------- object combine ------------
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "c", 6: "d"}

// const objCombine = {obj1, obj2}
// const objCombine = Object.assign({}, obj1, obj2, obj3)

const objCombine = {...obj1, ...obj2, ...obj3}

// console.log(objCombine);



//-------------- array of object ------------
const users = [
    {
        id: 1,
        name: "abc",
        email: "abc@test.com"
    },
    {
        id: 2,
        name: "xyz",
        email: "xyz@test.com"
    },
    {
        id: 3,
        name: "asd",
        email: "asd@test.com"
    }
]

//console.log(users[1].name) // xyz




console.log(tinderUser) // { id: 1, name: 'abc', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 1, 'abc', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', 1 ], [ 'name', 'abc' ], [ 'isLoggedIn', false ] ]


// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true

