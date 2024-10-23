"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

// created addScore function (copied from ShortExercisesA4 6-2).
// edited to fit new criteria.
const addScore = () => {
	// get user entries
	const name = $("#name").value;
	const score  = parseInt( $("#score").value );
	let isValid = true;
    
    // check entries for validity
    if (name == "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}
	
	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}
	
	if (isValid) {
		names[names.length] = name;
		scores[scores.length] = score;
	    $("#name").value = "";
		$("#score").value = "";
	}
	// // added line to clear textarea
	// $("#scores_display").value = "";
    $("#name").focus();
};

const displayResults = () => {
	document.body.appendChild(document.createElement("h2")).textContent = "Results";
};

// created displayScores function (copied from ShortExercisesA4 6-2).
// edited to fit new criteria.
const displayScores = () => {
	if ( == null) {
		document.body.appendChild(document.createElement("h2")).textContent = "Scores";
	}
	else {
		document.body.replaceChild(document.createElement("h2")).textContent = "Scores";
	}
	for (let i = 0; i < names.length; i++) {
		// $("#scores").body.appendChild(names[i] + "\t" + scores[i] + "\n");
	}
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});