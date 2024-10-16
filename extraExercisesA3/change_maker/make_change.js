const $ = selector => document.querySelector(selector);

const processEntry = () => {
    const userEntry = parseInt($("#cents").value);
    if (userEntry < 0 || userEntry > 99 || isNaN(userEntry)) {
        alert("Change must be an amount from 0 - 99")
    }
    else {
        makeChange(userEntry)
    }
};

function makeChange (amountInCents) {
    $("#quarters").value = (amountInCents / 25);
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
})