"use strict";

//const today = new Date(2024, 5, 12);
const today = new Date();


const year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

if( parseInt(day) < 10) {
    day = '0' + day;
}
if( parseInt(month) < 10) {
    month = '0' + month;
}
const dateString = `${year}--${month}--${day}`;
document.write(dateString);


collectUserInfo();

function collectUserInfo() {
    const first = prompt("Enter your first name");
    const last = prompt("Enter your last name");
    const dob = prompt("Enter your date of birth");

    const outValue = `\nYour password is ${first},${last}*${dob}`;
    document.write(outValue);
}

//write an function expression


/*const collectUserInfo = function() {
    const first = prompt("Enter your first name");
    const last = prompt("Enter your last name");
    const dob = prompt("Enter your date of birth");

    const outValue = `\nYour password is ${first},${last}*${dob}`;
    document.write(outValue);
}*/


//write an arrow function
/*const collectUserInfo = () => {
    const first = prompt("Enter your first name");
    const last = prompt("Enter your last name");
    const dob = prompt("Enter your date of birth");

    const outValue = `\nYour password is ${first},${last}*${dob}`;
    document.write(outValue);
}*/


