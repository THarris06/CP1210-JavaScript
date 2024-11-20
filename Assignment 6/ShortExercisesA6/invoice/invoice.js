"use strict";

const $ = (selector) => document.querySelector(selector);

const calculateDiscount = (customer, subtotal) => {
    if (customer == "reg") {
        if (subtotal >= 100 && subtotal < 250) {
            return .1;
        } else if (subtotal >= 250 && subtotal < 500) {
            return  .25;
        } else if (subtotal >= 500) {
            return .3;
        } else {
            return 0;
        }        
    }
    else if (customer == "loyal") {
        return .3;        
    }
    else if (customer == "honored") {
        if (subtotal < 500) {
            return .4;
        }
        else {
            return .5;
        }    
    }
};

document.addEventListener("DOMContentLoaded",  () => {

    $("#calculate").addEventListener("click", () => {
        const customerType = $("#type").value;
        let subtotal = $("#subtotal").value;
        subtotal = parseFloat(subtotal);
        if ( isNaN(subtotal) || subtotal <= 0) {
            alert("Subtotal must be a number greater than zero.");
            $("#clear").click();
            $("#subtotal").focus();
            return;
        }

        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;
        
        $("#subtotal").value = subtotal.toFixed(2);
        $("#percent").value = (discountPercent * 100).toFixed(2);
        $("#discount").value = discountAmount.toFixed(2);
        $("#total").value = invoiceTotal.toFixed(2);

        // set focus on type drop-down when done  
        $("#type").focus();

    });
    
    $("#clear").addEventListener("click", () => {

        $("#type").value = "reg";
        $("#subtotal").value = "";
        $("#invoice_date").value = "";
        $("#percent").value = "";
        $("#discount").value = "";
        $("#total").value = "";
        $("#due_date").value = "";

        // set focus on type drop-down when done
        $("#type").focus();
    })

    // set focus on type drop-down on initial load
    $("#type").focus();
});

