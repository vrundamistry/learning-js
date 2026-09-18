// Different ways to create promise

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve() // without resolve(), statement in 
        // .then() not work
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})


//------------------


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async task 2 consumed')
})


//------------------


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "test", email: "test@test.com"})
    }, 1000)
})

promiseThree.then(function(data){
    console.log(data)
})


//------------------


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Jhon", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then( (data) => {
    console.log(data)
    return data.username
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
}).finally( () => console.log("The promise is either resolved or rejected"))


//------------------


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const result = await promiseFive
        console.log(result)
    } catch (error) {
         console.log(error)
    }
}

consumePromiseFive()


//------------------


// async function getAllUsers(){
//     try{
//         //const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const response = await fetch('https://api.github.com/users/vrundamistry')
    
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("ERROR: ", error)
//     }
// }

// getAllUsers()



fetch('https://api.github.com/users/vrundamistry')
.then((response) => {
    // console.log(response)
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))