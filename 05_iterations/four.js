
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


// // Map
// // NOTE: Map ('for In' loop not worked with Map)
// const map = new Map()

// map.set("IN", "India")
// map.set("UK", "United Kingdom")
// map.set("FR", "France")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key)
// }


//----------------------------//
//------------ NOTE ----------//
//----------------------------//

// Array worked with both for-of and for-in. Difference is that with for-of it gives value while with for-in it gives key(index) like 0,1,.. etc

// Object worked with for-in only