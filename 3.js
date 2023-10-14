"use strict";
const loweruppercase = "Adam";
console.log(loweruppercase.toLowerCase());
console.log(loweruppercase.toUpperCase());
function totitlecase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
let createtitlecase = `she was missing her for long`;
console.log(totitlecase(createtitlecase));
