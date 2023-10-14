"use strict";
const ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 1; i <= 3; i++) {
    if (i === 1) {
        console.log("1.", i + "st.");
    }
    else if (i === 2) {
        console.log("2.", i + "nd.");
    }
    else {
        console.log("3.", i + "rd.");
    }
}
for (let i = 4; i < ordinal.length; i++) {
    console.log(i + ".", i + "th.");
}
