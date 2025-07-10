//String methods allow you to manipulate and work with text (strings)

let username = "Cale     bbb";

let result = username.startsWith("C");
let result2 = username.endsWith("B");

console.log(username.charAt(0));
console.log(username.indexOf("b"));
console.log(username.lastIndexOf("b"));
console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat(15));
console.log(result);
console.log(result2);


let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);
console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15, "0"));

