//callbacks = help with reading files, network requests, and interacting with databases\
//maakes sure function is correctly after 
//pass a function as an argument inside another function

hello(wait);

function hello(callback){
    console.log("Hello")
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!")
}

function goodbye(){
    console.log("Goodbye")
}

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myh1").textContent = result;
}