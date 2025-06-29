/*

/Math.random() generates a random number from 0-1
/floor gets rid of decimal. *6 is 0-6. + 1 inceases min to 1. So 1-6


let randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

const min = 50;
const max = 100;

let randomNum2 = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum2);

*/

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const myLabe2 = document.getElementById("myLabe2");
const myLabe3 = document.getElementById("myLabe3");

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
