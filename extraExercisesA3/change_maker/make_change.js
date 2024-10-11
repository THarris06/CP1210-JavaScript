const $ = selector => document.querySelector(selector);

const processEntry = () => {
    const userEntry = parseInt($("#cents").value);
    if (userEntry < 0 || userEntry > 99 || isNaN(userEntry)) {
        alert("Change must be an amount from 0 through 99")
    }
    else {
        makeChange(userEntry)
    }
};

function makeChange (amountInCents) {
    $("#quarters").value = Math.floor((amountInCents / 25));
    amountInCents -= ($("#quarters").value * 25);

    $("#dimes").value = Math.floor((amountInCents / 10));
    amountInCents -= ($("#dimes").value * 10);

    $("#nickels").value = Math.floor((amountInCents / 5));
    amountInCents -= ($("#nickels").value * 5);
    
    $("#pennies").value = amountInCents;
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
})