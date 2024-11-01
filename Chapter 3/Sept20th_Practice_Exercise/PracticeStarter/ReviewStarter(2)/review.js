"use strict";

// const $ = selector => document.querySelector(selector);

// const date = new Date()

// document.addEventListener("DOMContentLoaded", () => {
//     $("dateButton").addEventListener("click", () => {
//         alert(date.toDateString())
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#dateButton").addEventListener( "click", () => {
        const today = new Date();
        const year = today.getFullYear();
        let day = today.getDate().toString();
        if ( day.length == 1 ) {
            day = "0" + day;
        }
        let month = (today.getMonth() + 1).toString();
        if ( month.length == 1 ) {
            month = "0" + month;
        }

        const dateString = `${year}**${month}**${day}`;
        alert(dateString)
    })

    document.querySelector("#firstName").addEventListener( "dblclick", (event) => {
        event.currentTarget.value = "";
        // document.querySelector("#firstName").value = "";
    })
})  

