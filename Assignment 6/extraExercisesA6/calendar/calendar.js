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
		else if (year % 100 == 0) {
			if (year % 400 == 0) {
				return "29"
			}
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
const month = today.getMonth();
const monthText = getMonthText(month);
const lastDay = getLastDayofMonth(today.getMonth());

const calendarTable = document.querySelector("calendar");

document.addEventListener("DOMContentLoaded", ()=> {
	document.querySelector("h1").textContent = monthText + ' ' + year;

	const calendarTable = document.getElementById("calendar");
	const firstDay = new Date(year, month, 1).getDay();
	const totalDays = getLastDayofMonth(month)

	let currentDay = 1;

	// Loop to create rows for the calendar
	for (let rows = 0; rows < 6; rows++) {
		const row = document.createElement("tr");

		// Loop through each day of the week
		for (let i = 0; i < 7; i++) {
			// Fills first row with empty cells before first day
			if (rows === 0 && i < firstDay) {
				row.appendChild(document.createElement("td"));
			} 
			else if (currentDay <= totalDays) {
				const cell = document.createElement("td");
				cell.innerText = currentDay;
				row.appendChild(cell);
				currentDay++;
			}
		}

		if (currentDay > totalDays && row.children.length < 7) {
			const remainingCells = 7 - row.children.length;
			for (let i = 0; i < remainingCells; i++) {
				row.appendChild(document.createElement("td"));
			}
		}

		calendarTable.appendChild(row);

		if (currentDay > totalDays) {
			break;
		}
	}
});
