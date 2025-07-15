let fruits = ["Apple", "Orange", "Banana"];

fruits[0] = "coconut";

//fruits.push("coconut"); //add elemnent at end of array
//fruits.pop(); //remove last element
//fruits.unshift("grape"); Adds elemetn to the beginning of the array
//fruits.shift() //removes first element

let numOfFruits = fruits.length; //length of array
let index = fruits.indexOf("apple"); //index of apple

console.log(numOfFruits)


console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort(); //sorts in alphabetical order
fruits.sort().reverse(); //reverse alphabetica;