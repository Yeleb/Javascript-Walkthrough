// variable scope = where a variable is recognized and accessible (local vs global)

let x = 1;
//cant declare another x variable

//any variable declared inside of a funciton has a local scope
//this means x can be declared twice with different numbers

function1();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}


//global is any variable declared outside of a variuable


let y = 3;
//if we have two variables with the same name, then it will use the local variable first
// if y isnt declared inside funciton then it would use ythe global y = 3 variable if there is one in whjich this case there is

function funciton3(){
    let y = 1;
    console.log(y);
}

function funciton4(){
    let y = 2;
    console.log(y);
}