function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-=:;<>,.?/~`|";
    
    
    let allowedChars = "";
    let password = "";


    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0 ){
        return `(Password length must be atleast 1)`;
    }

    if(allowedChars.length === 0){
        return `(Atleast 1 set of characters need to be selected)`
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }
    return password;
}

function handleGenerate(){


const resultp = document.getElementById("resultp");
const numOfChars = document.getElementById("numOfChars");
const Lowercaseb = document.getElementById("Lowercaseb");
const Uppercaseb = document.getElementById("Uppercaseb");
const Numbersb = document.getElementById("Numbersb");
const Symbolsb = document.getElementById("Symbolsb");

 const passwordLength = Number(numOfChars.value);
    const includeLowercase = Lowercaseb.checked;
    const includeUppercase = Uppercaseb.checked;
    const includeNumbers = Numbersb.checked;
    const includeSymbols = Symbolsb.checked;


const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated Password: \n${password}`);
resultp.textContent = `${password}`;

}
