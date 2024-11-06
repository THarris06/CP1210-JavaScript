"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const date = new Date(2024, 1, 1, 24);
    if (date.getHours() > 12) {
        $("#hours").textContent = padSingleDigit(date.getHours() - 12);
        $("#ampm").textContent = "PM";
    }
    else if (date.getHours() == 12) {
        $("#hours").textContent = padSingleDigit(date.getHours());
        $("#ampm").textContent = "PM";
    }
    else if (date.getHours() == 0) {
        $("#hours").textContent = padSingleDigit(date.getHours() + 12);
        $("#ampm").textContent = "AM";
    }
    else {
        $("#hours").textContent = padSingleDigit(date.getHours());
        $("#ampm").textContent = "AM";
    }
    
    $("#minutes").textContent = padSingleDigit(date.getMinutes());
    $("#seconds").textContent = padSingleDigit(date.getSeconds());
};

document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    displayCurrentTime();
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    setInterval(displayCurrentTime, 1000)
    
});