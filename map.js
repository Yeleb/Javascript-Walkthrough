// .map() = accepts a callback and applies that funciton 
//          to each element of an array, then return a new array

/*
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes)

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}
    */
/*const students = ["spongebob", "patrick", "squidward", "sandy"];
const studentsUpper = students.map(upperCase);
console.log(studentsUpper);
function upperCase(element){
    return element.toUpperCase();
}
    */
   const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

    const formattedDates = dates.map(formatDates);

    console.log(formattedDates);

   function formatDates(element){
        const parts = element.split("-");
        return `${parts[1]}/${parts[2]}/${parts[0]}`;
   }