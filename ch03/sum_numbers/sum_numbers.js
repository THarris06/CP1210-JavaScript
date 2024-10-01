"use strict";

let userInput = 0;
let loop = "n";
let sum = 0;

do {
    do {
        sum = 0;
        userInput = parseInt(prompt("Enter any top number to sum\nfrom 1 through 100"))
        if ( isNaN(userInput) || userInput > 100 || userInput < 1) { 
            alert("Please enter a number between 1 and 100");
        }
    }
    while ( isNaN(userInput) || userInput > 100 || userInput < 1 )
    
    for (let i = 1; i <= userInput; i++) {
        sum = sum + i;
    }
    document.write(`<p>The sum of the numbers from 1 through ${userInput} is ${sum}</p>`);

    loop = prompt("Do another sum?")
}
while ( loop == "y" )
