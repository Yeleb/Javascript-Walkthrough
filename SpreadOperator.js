//spread operator = represented by ...     
//                      allows an iterable such as array or string to be expanded into seperate elements

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum);

let username = "Bro Code";
let letters = [...username].join("-");
console.log(letters);

let foods = ["hamburger", "pasta", "pizza"]
let fruits = ["apple", "orange", "banana"]
newFoods = [...foods, ...fruits,"eggs", "milk"];




console.log(newFoods)
console.log(foods)
