"use strict";

let userInput;
let enteredValues = [];
let oddValues = [];
let total = 0;
do {
    userInput = parseInt(prompt("Enter a number, enter -999 to exit"));
    if(userInput != -999 && !isNaN(userInput)) {
        enteredValues[enteredValues.length] = userInput;
    }
} while(userInput != -999);

//console.log(enteredValues);

for( let i in enteredValues) {
    total += enteredValues[i];
}
document.write(`<p>${total}</p>`);

for( let value of enteredValues) {
    if( value % 2 == 1) {
        oddValues[oddValues.length] = value;
    }
}

document.write(`<p>${oddValues}</p>`);