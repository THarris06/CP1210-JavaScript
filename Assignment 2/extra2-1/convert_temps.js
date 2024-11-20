"use strict"

// get temperature in Fahrenheit
const tempInFahrenheit = parseInt(prompt("Enter Fahrenheit temperature"))

// calculate Celsius temperature
const tempInCelsius = parseInt((tempInFahrenheit - 32) * (5/9))

// // display in dialog box
// alert(tempInCelsius)

// display in browser page
const html = `<p>${tempInFahrenheit} F = ${tempInCelsius} C</p>`
document.write(html);
