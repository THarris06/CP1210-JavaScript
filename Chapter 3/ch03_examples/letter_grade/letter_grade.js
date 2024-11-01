"use strict";

let userInput = 0;
let enteredValues = [];
let grades = [];

do {
    userInput = parseInt(prompt("Enter number grade from 0 through 100\nOr enter 999 to end entries"))
    if ( userInput >= 0 && userInput <= 100 && !isNaN(userInput) && userInput != 999) {
        if (userInput >= 88) {
            enteredValues.push(userInput)
            grades.push("A");
        }
        else if (userInput <= 87 && userInput >= 80) {
            enteredValues.push(userInput)
            grades.push("B");
        }
        else if (userInput <= 79 && userInput >= 68) {
            enteredValues.push(userInput)
            grades.push("C");
        }
        else if (userInput <= 67 && userInput >= 60) {
            enteredValues.push(userInput)
            grades.push("D");
        }
        else if (userInput < 60) {
            enteredValues.push(userInput)
            grades.push("F");
        }
    }
}
while (userInput != 999)

for (let i = 0; i < enteredValues.length; i++) {
    document.write(`<p>Grade ${enteredValues[i]} = ${grades[i]}</p>`)
}
    