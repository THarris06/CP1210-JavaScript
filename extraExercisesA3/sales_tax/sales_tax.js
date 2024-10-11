"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    if (subtotal <=0 || subtotal >= 10000 || isNaN(subtotal)) {
        alert("Subtotal must be > 0 and < 10,000")
    }
    else if (taxRate <=0 || taxRate >= 12 || isNaN(taxRate)) {
        alert("Tax Rate must be > 0 and < 12")
    }
    else {
        $("#sales_tax").value = (subtotal * (taxRate / 100)).toFixed(2);
        $("#total").value = (subtotal * (1 + taxRate / 100)).toFixed(2);
    }
    $("#subtotal").focus();    
};

function clearSubtotal () {
    $("#subtotal").value = "";
}

function clearTaxRate () {
    $("#tax_rate").value = "";
}

const clearEntries = () => {
    clearSubtotal();
    clearTaxRate();
    $("#sales_tax").value = "";
    $("#total").value = "";
    $("#subtotal").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#subtotal").focus();
    $("#subtotal").addEventListener("click", clearSubtotal);
    $("#tax_rate").addEventListener("click", clearTaxRate);
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
})