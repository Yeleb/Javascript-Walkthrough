// constant = a variable that can't be changed
//When const numbers and boolean name can be Uppercase as good practice
//When const strings dont be uppercase


const PI = 3.14159;
let radius;
let circumference;



document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `Circumference: ${circumference}cm`;
}
