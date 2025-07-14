//function = A section of reusable code.
/*
function happyBirthday(username, age){
    console.log("Happy Birthday to you!")

    console.log("Happy Birthday to you!")

    console.log(`Happy Birthday dear ${username}`)

    console.log("Happy Birthday to you!")

    console.log(`You are ${age} old`)
}


happyBirthday("Brocode", 22);
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);
*/

function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}

function isEven(number){
    // if(number % 2 == 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return number % 2 === 0 ? true : false;
    
}
function isValidEmail(email){
return email.includes("@") ? true : false;
}


console.log(isValidEmail("Bro@fake.com"))
console.log(isValidEmail("Brofake.com"))
console.log(isEven(12));
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));