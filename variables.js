//numbers


let price = 10.99;
let gpa = 2.1;

console.log(typeof price);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);

//strings
//strings can include numbers. Just have no value to them
let firstName = "Yeleb";
let favoriteFood = "pizza";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);

//boolean
let online = true;
let forSale = false;

console.log(`Yeleb is online: ${online} `);
console.log(`Is this car for sale: ${forSale}`);


let fullName = "Caleb Zeringue";
let age = 21;
let student = true;


document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;