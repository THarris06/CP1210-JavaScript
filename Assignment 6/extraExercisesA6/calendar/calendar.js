"use strict";

const getMonthText = currentMonth => {
	if (currentMonth === 0) { return "January"; }
	else if (currentMonth === 1) { return "February"; }
	else if (currentMonth === 2) { return "March"; }
	else if (currentMonth === 3) { return "April"; }
	else if (currentMonth === 4) { return "May"; }
	else if (currentMonth === 5) { return "June"; }
	else if (currentMonth === 6) { return "July"; }
	else if (currentMonth === 7) { return "August"; }
	else if (currentMonth === 8) { return "September"; }
	else if (currentMonth === 9) { return "October"; }
	else if (currentMonth === 10) { return "November"; }
	else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = currentMonth => {
	if (currentMonth === 0) { return "31"; }
	else if (currentMonth === 1) { 
		if (year % 4 == 0) {
			return "29"; 
		}
		else {
			return "28";
		}
	}
	else if (currentMonth === 2) { return "31"; }
	else if (currentMonth === 3) { return "30"; }
	else if (currentMonth === 4) { return "31"; }
	else if (currentMonth === 5) { return "30"; }
	else if (currentMonth === 6) { return "31"; }
	else if (currentMonth === 7) { return "31"; }
	else if (currentMonth === 8) { return "30"; }
	else if (currentMonth === 9) { return "31"; }
	else if (currentMonth === 10) { return "30"; }
	else if (currentMonth === 11) { return "31"; }
};


const today = new Date();
const year = today.getFullYear();
const month = getMonthText(today.getMonth());
const lastDay = getLastDayofMonth(today.getMonth());

document.addEventListener("DOMContentLoaded", ()=> {
	document.querySelector("h1").textContent = month + ' ' + year + ' ' + lastDay;

	// for (let day = 0; day <= lastDay; day++) {
		
	// }
	

});
