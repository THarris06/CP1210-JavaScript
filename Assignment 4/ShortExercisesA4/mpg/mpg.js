"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1);

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        // displays alert.
        $("#miles").nextElementSibling.textContent = "Must be a vaild number greater than zero."
        focusAndSelect("#miles");
    } if (isNaN(gallons) || gallons <= 0) {
        // displays alert.
        $("#gallons").nextElementSibling.textContent = "Must be a vaild number greater than zero."
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = calculateMPG(miles, gallons);
        // call clearSpans function.
        clearSpans();
    }
};

const clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
};

// created a function that clears the spans that can be called whenever needed.
const clearSpans = () => {
    $("#miles").nextElementSibling.textContent = "*"
    $("#gallons").nextElementSibling.textContent = "*"
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#miles").focus();
    // added event listener to clear the spans when clear is clicked.
    $("#clear").addEventListener("click", clearSpans);
});