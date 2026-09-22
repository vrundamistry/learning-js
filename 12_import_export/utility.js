// ----------- export all function individually -----------

// export function multiply(a, b, c){
//     return a*b*c;
// }

// export function addition(a, b){
//     return a + b
// }



// ------------- export all function together -------------

function multiply(a, b, c){
    return a*b*c;
}

function addition(a, b){
    return a + b
}

const UNIQUE_ID = 123


export{
    multiply, addition, UNIQUE_ID
}



// ------------- export default function -------------

export default function addition1(a, b, c){
    return a + b + c
}