"use strict";

const $ = selector => document.querySelector(selector);

const processEntry = () => {
	const userEntry = parseInt($("#income").value);
    if (userEntry < 0 || isNaN(userEntry)) {
        alert("Income must be a valid number greater than 0")
    }
    else {
		$("#tax").value = calculateTax(userEntry).toFixed(2)
    }
	$("#income").focus();
};

const calculateTax = (income) => {
	let tax = 0
	if (income <= 9875) {
		tax = income * 0.10
	}
	else if (income <= 40125) {
		tax = 987.5
		tax += (income - 9875) * 0.12
	}
	else if (income <= 85525) {
		tax = 4617.5
		tax += (income - 40125) * 0.22
	}
	else if (income <= 163300) {
		tax = 14605.5
		tax += (income - 85525) * 0.24
	}
	else if (income <= 207350) {
		tax = 33271.5
		tax += (income - 163300) * 0.32
	}
	else if (income <= 518400) {
		tax = 47367.5
		tax += (income - 207350) * 0.35
	}
	else {
		tax = 156235
		tax += (income - 518400) * 0.37
	}
	return tax;
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});