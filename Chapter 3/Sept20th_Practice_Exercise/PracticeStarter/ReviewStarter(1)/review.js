"use strict";

const enteredValues = []
const oddValues = []
let userInput = 0;
let total = 0;

do {
    userInput = parseInt(prompt("Enter a number: "));

    if (userInput != -999 && !isNaN(userInput)) {
        enteredValues.push(userInput); 
    }
   
}
while (userInput != -999);

for (let i = 0; i < enteredValues.length; i++) {
    if (enteredValues[i] % 2 == 1) {
        oddValues.push(enteredValues[i])
    }
    total += enteredValues[i]
}
document.write(enteredValues)
document.write(`<p>Total: ${total}</p>`)
document.write(oddValues)