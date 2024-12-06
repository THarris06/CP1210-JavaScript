"use strict";

const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded",  () => {
	// display data from session storage
	let email = localStorage.getItem("email");
	let phone = localStorage.getItem("phone");
	let zip = localStorage.getItem("zip");
	let dob = localStorage.getItem("dob");

	$("#email").textContent = email;
	$("#phone").textContent = phone;
	$("#zip").textContent = zip;
	$("#dob").textContent = dob;
	
	$("#back").addEventListener("click", () => {
		window.history.back();
	}); // end of click()
	
}); // end of ready()