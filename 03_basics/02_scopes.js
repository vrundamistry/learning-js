let a = 200;

if(true){
    let a = 10;
    const b = 50;

    // console.log(`INNER SCOPE: ${a}`)
}

// console.log(a);
// console.log(b);

//---------------------------

function one(){
    const username = "Jhon";

    function two(){
        const surname = "Thomas";
        // console.log(username);
    }

    //console.log(surname);

    two();
}

// one();


//---------------------------

if(true){
    const username = "Vrunda";
    if( username == "Vrunda" ){
        const surname = " Mistry"
        // console.log(username + surname);
    }
    // console.log(surname);
}

// console.log(username);


//---------------------------

console.log(addOne(2))
function addOne(num){
    return num + 1;
}


// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2;
}

