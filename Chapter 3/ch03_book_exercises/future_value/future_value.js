"use strict";

do {
    // get investment amount - loop until user enters a number
    let investment = 0;
    do {
        investment = parseFloat(
            prompt("Enter investment amount as xxxxx.xx", 10000));
    }
    while ( isNaN(investment) || investment <= 0 );

    // get interest rate - loop until user enters a number
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    }
    while ( isNaN(rate) || rate <= 0 || rate >= 15);

    // get number of years - loop until user enters a number
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    }
    while ( isNaN(years) || years <= 0);

    // calulate future value
    // let futureValue = investment;
    // for (let i = 1; i <= years; i++ ) {
    //     futureValue = futureValue + (futureValue * rate / 100);
    // }

    // display results
    // document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
    // document.write(`<p><label>Interest rate:</label> ${rate}</p>`);
    // document.write(`<p><label>Years:</label> ${years}</p>`);
    // document.write(`<p><label>Future Value:</label> ${futureValue.toFixed(2)}</p>`);

    // display user entries
    document.write(`<h4>Investment amount = ${investment} Interest rate = ${rate} Years = ${years}</h4>`)

    // new display results format
    let futureValue = investment
    for (let i = 1; i <= years; i++) {
        document.write(`<p>Year=${i} Interest=${(futureValue * rate / 100).toFixed(2)} Value=${(futureValue + (futureValue * rate / 100)).toFixed(2)}</p>`)
        futureValue = futureValue + (futureValue * rate / 100);
    }

}
while (confirm("Continue?"));