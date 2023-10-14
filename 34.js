"use strict";
let pizzas = ["Fajita", "Chessy", "Tikka"];
for (var index in pizzas) {
    console.log(`${pizzas[index]}`);
    console.log(`i like ${pizzas[index]} pizza.`);
}
console.log(`i just love eating pizzas, ${pizzas[0]} is my favorite pizza, i eat it often. however, ${pizzas[1]} and ${pizzas[2]} are also not bad.`);
