"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    let timer = null;
    let counter = 1;

    $("#toggleShow").addEventListener("click", () => {
        if (timer == null) {
            timer = setInterval( () => {
                counter++;
                $("#number").textContent = counter;
            }, 1000)
            $("#toggleShow").value = "Stop";
        }
        else {
            clearInterval(timer);
            timer = null;
            $("#toggleShow").value = "Start";
        }
    });

    $("#reset").addEventListener("click", () => {
        counter = 1;
        $("#number").textContent = counter;
    });
});