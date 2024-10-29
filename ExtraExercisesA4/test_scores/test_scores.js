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
		$("#name").nextElementSibling.textContent = "Please enter a name.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}
	
	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "Score must be between 0 and 100.";
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
	// create header
	if ($("h2") == null) {
		document.body.appendChild(document.createElement("h2")).textContent = "Results";
	};

	// calculate average score
	let averageScore = 0;
	for (let i = 0; i < scores.length; i++) {
		averageScore += parseInt(scores[i]);
	};
	averageScore = (averageScore / scores.length);

	// get highest score
	let highScore = 0;
	let highName = "";
	for (let i = 0; i < scores.length; i++) {
		if (highScore < parseInt(scores[i])) {
			highScore = scores[i];
			highName = names[i]
		}
	};

	// display results
	if ($("average") == null) {
		document.body.appendChild(document.createElement("average")).textContent = "Average score is " + averageScore;
		document.body.appendChild(document.createElement("br"));
	}
	else {
		$("average").textContent = "Average score is " + averageScore;
	};

	if ($("highScore") == null) {
		document.body.appendChild(document.createElement("highScore")).textContent = "High score = " + highName + " with a score of " + highScore;
	}
	else {
		$("highScore").textContent = "High score = " + highName + " with a score of " + highScore;
	};
};
	
// created displayScores function (copied from ShortExercisesA4 6-2).
// edited to fit new criteria.
const displayScores = () => {
	if ($("h3") == null) {
		document.body.appendChild(document.createElement("h3")).textContent = "Scores";
	};
	
	for (let i = 0; i < names.length; i++) {
		if (i == 0) {
			document.body.appendChild(document.createElement("scores"));
			$("scores").textContent = names[i] + " " + scores[i];
		}
		else {
			$("scores").textContent += names[i] + " " + scores[i];
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});