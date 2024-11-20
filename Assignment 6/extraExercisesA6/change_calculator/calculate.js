"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        let cents = $("#cents").value;
        if (cents < 0 || cents > 99 || isNaN(cents)) {
            alert("cents must be a valid int from 0 - 99")
        }
        else {
            $("#quarters").value = Math.floor((cents / 25));
            cents -= ($("#quarters").value * 25);

            $("#dimes").value = Math.floor((cents / 10));
            cents -= ($("#dimes").value * 10);

            $("#nickels").value = Math.floor((cents / 5));
            cents -= ($("#nickels").value * 5);
            
            $("#pennies").value = cents;
        }
        $("#cents").focus();
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method