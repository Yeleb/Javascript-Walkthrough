//while loops repeat code WHILE some condition is true

/*let username = "";

while(username === ""; || username === null){
    username = window.prompt("Enter your name");
}

console.log(`Hello ${username}`);
*/

let loggedIn = false;
let username
let password 

    while(!loggedIn){

 username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!")
    }
    else{
        console.log("Invalid credintials! Please try again!")
    }
    }
   
