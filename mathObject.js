//Math = built-in math properties



console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let w = 3.99;
let y = 2;
let g = 81;
let n = -3.69;
let z;

//rounds
z = Math.round(x);
console.log(z);
//rounds down
z = Math.floor(w);
console.log(z);
//rounds up
z = Math.ceil(w);
console.log(z);
//elimenates decimal
z = Math.trunc(w);
console.log(z);
//power of function
z = Math.pow(x, y);
console.log(z);
//square root
z = Math.sqrt(g);
console.log(z);
//log
z = Math.log(g);
console.log(z);
//trig - within functions place radians
z = Math.sin(g);
console.log(z);
z = Math.cos(g);
console.log(z);
z = Math.tan(g);
console.log(z);
//Absolute value
z = Math.abs(n);
console.log(z);
//sign of number
z = Math.sign(n);
console.log(z);

let m = 3;
let a = 2;
let p = 1;

let max = Math.max(m,a,p);
let min = Math.min(m,a,p);

console.log(max);
console.log(min);