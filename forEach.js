//forEach() = iterate elements of an array and applay a specified function (callback)
//provides element, index, and array


let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitolize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitolize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}




/*let numbers = [1, 2, 3, 4, 5];
numbers.forEach(square);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}
    */