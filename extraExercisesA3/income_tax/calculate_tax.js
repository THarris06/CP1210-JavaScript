"use strict";

const $ = selector => document.querySelector(selector);

const processEntry = () => {
	const userEntry = parseFloat($("#income").value);
    if (userEntry < 0 || isNaN(userEntry)) {
        alert("Income must be a valid number greater than 0")
    }
    else {
		const taxes = calculateTax(userEntry)
		$("tax").value = taxes 
    }
}

function calculateTax(income) {
	let tax = 0
	if (income <= 9875) {
		tax = income * 0.10
	}
	else if (income <= 40125) {
		tax = 987.5
		tax += (income - 9875) * 0.12
	}
	return tax;
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});