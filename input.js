// EASY way = window prompt
// PROFESSIONAL way = HTML textbox

/*
let username;

username = window.prompt("Whats your username?");

console.log(username);
*/
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}