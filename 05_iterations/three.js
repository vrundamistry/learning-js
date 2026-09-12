
// ["", "", ""]
// [{}, {}, {}]


//------------ for-Of ------------

// const arr = [1, 2, 3, 4, 5]
// for (const val of arr) {
//     console.log(val)
// }

// const programming = ["js", "py", "java", "php", "cpp"]
// for (const key of programming) {
//     console.log(key)
// }

// let greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


//-------- Maps ---------

// take unique value and preserve order

const map = new Map()

map.set("IN", "India")
map.set("UK", "United Kingdom")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map)

for (const [key, value] of map) {
    // console.log(`${key} : ${value}`)
}


// NOTE: object ('for of' loop not worked with Object)
const myObj = {
    'game1': "Super Mario",
    "game2": "Tank",
    "game3": "Snow Brothers"
}

// for (const [key, value] of myObj) {
//     console.log(`${key} : ${value}`)
// }