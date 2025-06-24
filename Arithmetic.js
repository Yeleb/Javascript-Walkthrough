

let students =30;

students = students +1;

students = students -1;

students = students * 2;

students = students / 2;

students = students **2;

students = students %2;

let extraStudnets = students %3;


students += 1; 
students -= 1;
students *=2;
students /=2;
students **=2;
students %=2;

students++;
students--;


console.log(students);

/*
Operator Precedence
1. parenthesis
2. exponets
3. multiplication & division & module
4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);