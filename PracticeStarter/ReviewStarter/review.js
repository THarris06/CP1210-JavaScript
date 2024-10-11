"use strict";

let secretNumber = 5;
let userNumber = 0;
let numberOfGuesses = 0;
do {   
    userNumber = parseFloat(
        prompt("Pick a number from 1 - 10"));
    numberOfGuesses = numberOfGuesses + 1;
}
while ( isNaN(userNumber) || userNumber < 1 || userNumber > 10 || userNumber != secretNumber );

alert("Congratulations!\nThe secret number was " + secretNumber + "!\nYou got it in " + numberOfGuesses + " Attemps!")
document.write(`<p>Congratulations!<br></br>The secret number was ${secretNumber}!<br></br>You got it in ${numberOfGuesses} Attemps!</p>`)
