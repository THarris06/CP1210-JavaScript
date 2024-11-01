"use strict";

const secretNumber = 6;
let guess = -1;
let guessCount = 0;

while( guess != secretNumber) {
    do {
        guess = parseInt(prompt("Enter a number between 1 and 10"));
    } while( isNaN(guess) || guess <=0 || guess > 10 )

    if( guess != secretNumber ) {
        alert("incorrect guess, try again")
    }
    guessCount++;
}

alert(`You guessed the correct number ${secretNumber} and it took ${guessCount} guesses`);