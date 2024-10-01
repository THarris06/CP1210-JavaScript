"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// calculate sales by quarter
let q1 = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
let q2 = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
let q3 = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
let q4 = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];
let q5 = region1[4] + region2[4] + region3[4] + region4[4] + region5[4];
document.write(`<h2>Sales by Quarter</h2><p>Q1: $${q1}<br>Q2: $${q2}<br>Q3: $${q3}<br>Q4: $${q4}</p>`)

// calculate sales by region
let r1 = region1[0] + region1[1] + region1[2] + region1[3];
let r2 = region2[0] + region2[1] + region2[2] + region2[3];
let r3 = region3[0] + region3[1] + region3[2] + region3[3];
let r4 = region4[0] + region4[1] + region4[2] + region4[3];
let r5 = region5[0] + region5[1] + region5[2] + region5[3];
document.write(`<h2>Sales by Region</h2><p>Region 1: $${r1}<br>Region 2: $${r2}<br>Region 3: $${r3}<br>Region 4: $${r4}<br>Region 5: $${r5}</p>`)

// calculate total sales
const allSales = [region1, region2, region3, region4, region5];

let totalSales = 0;
for (let r = 0; r < allSales.length; r++) {
    for (let q = 0; q < allSales[r].length; q++) {
        totalSales += allSales[r][q];
    }
}
document.write(`<h2>Total Sales</h2><p>$${totalSales}</p>`)
