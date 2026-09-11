
//----------- for-In -----------

// object
const  myObj = {
    'js': 'Javascript',
    'cpp': 'C++',
    'rb': 'Ruby',
    'swift': 'Swift by Apple'
}

for (const key in myObj) {
   //  console.log(`${key} shortcut is for ${myObj[key]}`)
}


// array
const programming = ["js", "py", "java", "php", "cpp"]
for (const key in programming) {
    // console.log(programming[key])
    // console.log(`${key} : ${programming[key]}`)
}


// map
// const map = new Map()

// map.set("IN", "India")
// map.set("UK", "United Kingdom")
// map.set("FR", "France")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key)
// }
