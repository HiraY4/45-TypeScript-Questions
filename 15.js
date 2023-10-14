"use strict";
const newinvite = ["jackson", "yousuf", "diana"];
newinvite.splice(1, 1, "sam");
for (var index in newinvite) {
    console.log(`hey ${newinvite[index]}, would you like to join us for dinner?`);
}
