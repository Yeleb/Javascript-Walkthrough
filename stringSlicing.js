const fullName = "Caleb Zeringue";

// let firstName = fullName.slice(0,6);
// let lastName = fullName.slice(6);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);


console.log(firstName);
console.log(lastName);



const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);

