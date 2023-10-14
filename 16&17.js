"use strict";
const moreguests = ["jackson", "yousuf", "diana"];
moreguests.unshift("sonia");
console.log(moreguests);
moreguests.splice(1, 0, "jawad");
console.log(moreguests);
moreguests.push("shaggy");
console.log(moreguests);
for (var index in moreguests) {
    console.log(`hey ${moreguests[index]}, please come join us.`);
}
// ---
console.log(`${moreguests.pop()}, sorry I can’t invite them to dinner.`);
console.log(`${moreguests.pop()}, sorry I can’t invite them to dinner.`);
console.log(`${moreguests.pop()}, sorry I can’t invite them to dinner.`);
console.log(`${moreguests.pop()}, sorry I can’t invite them to dinner.`);
for (var index in moreguests) {
    console.log(`${moreguests[index]}, hey guys, you are still invited, so chill.`);
}
console.log(moreguests);
(moreguests.shift());
console.log(moreguests);
(moreguests.shift());
console.log(moreguests);
