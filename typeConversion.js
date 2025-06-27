// type conversion = change the datatypes of a value to another
// input iis 21 then if you += 21 it will give you 211 because its string

/*
let age = window.prompt("How old are you?");
age = Number(age);
age+=1;

console.log(age, typeof age);
*/

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);