#!/usr/bin/env node
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.clear();
1.;
// install vscode (done)
2.;
var personalmessage = "Adam";
console.log("\u201CHello ".concat(personalmessage, ", would you like to learn some Python today?\u201D"));
3.;
var loweruppercase = "Adam";
console.log(loweruppercase.toLowerCase());
console.log(loweruppercase.toUpperCase());
function totitlecase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
var createtitlecase = "she was missing her for long";
console.log(totitlecase(createtitlecase));
4.;
var quote = 'Virgil Life is what happens when you’re busy making other plans.';
console.log("Benjamin Franklin once said, ".concat(quote));
5.;
var famous_person = "John Lennon.";
var message = "Fortune favors the bold";
console.log("".concat(message, " - ").concat(famous_person));
6.;
var Aname = "john\twick";
console.log(Aname);
var bname = "\nsaba\tqamar\n";
console.log(bname);
var cname = "sam\nyousuf";
console.log(cname);
7.;
var numberp = (4 + 4);
var numbers = (10 - 2);
var numberm = (4 * 2);
var numberd = (16 / 2);
console.log(numberp);
console.log(numbers);
console.log(numberm);
console.log(numberd);
8.;
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
9.;
var favorite_number = 4;
console.log("".concat(favorite_number, " is my favorite number"));
10.;
var favorite_numb = 4;
console.log("".concat(favorite_numb, " is my favorite number"));
//here i have discussed my favorite number.
11.;
var friends_name = ["sauleh", "waseh", "sarah", "hira"];
console.log(friends_name[0]);
console.log(friends_name[1]);
console.log(friends_name[2]);
console.log(friends_name[3]);
12.;
var friends_name = ["sauleh", "waseh", "sarah", "hira"];
for (var index in friends_name) {
    console.log("hi there, ".concat(friends_name[index]));
}
13.;
var transportation = ["I would like to own a swift car.", "I would like to own a Honda motorcycle"];
for (var index in transportation) {
    console.log(transportation[index]);
}
14.;
var invite = ["jackson", "yousuf", "diana"];
for (var index in invite) {
    console.log("hey ".concat(invite[index], ", i would like to invite you to dinner."));
}
15.;
var newinvite = ["jackson", "yousuf", "diana"];
newinvite.splice(1, 1, "sam");
for (var index in newinvite) {
    console.log("hey ".concat(newinvite[index], ", would you like to join us for dinner?"));
}
16.;
var moreguests = ["jackson", "yousuf", "diana"];
moreguests.unshift("sonia");
console.log(moreguests);
moreguests.splice(1, 0, "jawad");
console.log(moreguests);
moreguests.push("shaggy");
console.log(moreguests);
for (var index in moreguests) {
    console.log("hey ".concat(moreguests[index], ", please come join us."));
}
17.;
console.log("".concat(moreguests.pop(), ", sorry I can\u2019t invite them to dinner."));
console.log("".concat(moreguests.pop(), ", sorry I can\u2019t invite them to dinner."));
console.log("".concat(moreguests.pop(), ", sorry I can\u2019t invite them to dinner."));
console.log("".concat(moreguests.pop(), ", sorry I can\u2019t invite them to dinner."));
for (var index in moreguests) {
    console.log("".concat(moreguests[index], ", hey guys, you are still invited, so chill."));
}
console.log(moreguests);
(moreguests.shift());
console.log(moreguests);
(moreguests.shift());
console.log(moreguests);
18.;
var Seethe_world = ["switzerland", "karachi", "lahore", "brazil"];
console.log(Seethe_world);
console.log(__spreadArray([], Seethe_world, true).sort());
console.log(Seethe_world);
console.log(__spreadArray([], Seethe_world, true).sort().reverse());
console.log(Seethe_world);
console.log(Seethe_world.reverse());
console.log(Seethe_world.reverse());
console.log(Seethe_world.sort());
console.log(Seethe_world.reverse());
// // [...variable]         => The variable is not modified
19.;
var guestLength = ["jackson", "yousuf", "diana"];
console.log(guestLength.length);
20.;
var anything = ["mountain", "rivers", "roads"];
console.log(anything);
21.;
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car);
22.;
21.;
var Bcar = {
    coolname: "bugatti",
    year: 2023,
    company: "Bugatti",
    color: "copper"
};
console.log(Bcar);
// corrected error in question 22.
23.;
var sabu = "sabaru";
console.log("is sabu == `sabaru`? i predict true");
console.log(sabu == "sabaru");
var drama = "drama";
console.log("is drama == 'nauroz`? i predict true");
console.log(drama == 'nauroz');
var bike = "YAMAHA";
console.log("is bike == `YAMAHA`? i predict true");
console.log(bike == "YAMAHA");
var mawra = "actor";
console.log("is mawra === `actor`? i predict true");
console.log(mawra == "actor");
var fawad_khan = "actor";
console.log("is fawad_khan == `actor`? i predict true");
console.log(fawad_khan == "actor");
var barbie = "doll";
console.log("is barbie == `toycar`? i predict false");
console.log(barbie == "toycar");
var mercedes = "luxury_car";
console.log("is mercedes === `car`? i predict false");
console.log(mercedes === "car");
var mehran = "car";
console.log("is mehran == `bike?` i predict false");
console.log(mehran == 'bike');
var school = "education";
console.log("is school == `employment`? i predict false");
console.log(school == "employment ");
var paint = "blue";
console.log("is paint === `pink`? i predict false");
console.log(paint === "pink");
24.;
var paint1 = "orange";
console.log("is paint === `orange`? i predict true");
console.log(paint1 === "orange");
var paintcolor = "yellow";
console.log("is paint === `orange`? i predict false");
console.log(paint === "orange");
var lowercasetest2 = 'sarah';
if (lowercasetest2 === lowercasetest2.toLowerCase()) {
    console.log(true);
}
else {
    console.log(false);
}
var lowercasetest = 'sABa';
if (lowercasetest === lowercasetest.toLowerCase()) {
    console.log(true);
}
else {
    console.log(false);
}
var n = 5;
var num3 = (n > 4);
console.log(num3);
var num6 = (n > 10);
console.log(num6);
var num4 = (n >= 5);
console.log(num4);
var num7 = (n >= 8);
console.log(num7);
var num5 = (n <= 5);
console.log(num5);
var num8 = (n <= 20);
console.log(num8);
var num9 = (n <= 5 && n >= 5);
console.log(num9);
var num10 = (n <= 4 && n >= 5);
// console.log(num10);
var num11 = (n <= 5 || n >= 55);
console.log(num11);
var num12 = (n <= 3 || n >= 100);
console.log(num12);
var array = ["sonia", "hira", "sarah"];
console.log(array.includes("hira"));
console.log(array.includes("sania"));
25.;
var alien_color = "green";
if (alien_color === "green") {
    console.log("the player just earned 5 points!");
}
else
    console.log("");
26.;
var alien_game = "green";
if (alien_game == "green") {
    console.log("You earned 5 points!");
}
else if (alien_color != "green") {
    console.log("you got 10 points!");
}
27.;
var alien_shot = "green";
if (alien_shot == "green") {
    console.log("You earned 5 points!");
}
else if (alien_shot === "yellow") {
    console.log("you got 10 points!");
}
else if (alien_shot === "Red") {
    console.log("you got 20 points!");
}
28.;
var age = 2;
if (age < 2) {
    console.log("baby");
}
else if (age >= 2 && age < 5) {
    console.log("toddler");
}
else if (age > 4 && age <= 13) {
    console.log('kid');
}
else if (age >= 14 && age <= 21) {
    console.log("teenager");
}
else if (age >= 21 && age <= 65) {
    console.log("adilt");
}
else {
    console.log("elder");
}
29.;
var fruits = ["Mango", "Apple", "Banana", "Orange", "Grapes", "Fruit101"];
if (fruits.includes("Apple")) {
    console.log("You really like apples!");
}
else if (fruits.includes("Banana")) {
    console.log("You really like bananas!");
}
else if (fruits.includes("Orange")) {
    console.log("Are oranges orange because oranges are orange, or is orange orange because oranges are oranges?");
}
else if (fruits.includes("Fruit101")) {
    console.log("-- Demo Text --");
}
30.;
var workers = ["Eric", "Hira", "Admin", "Sonia", "Jawad"];
for (var i = 0; i < workers.length; i++) {
    if (i === 2) {
        console.log("Hi there ".concat(workers[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Thank you ".concat(workers[i], " for Logging in Again."));
    }
}
31.;
var users = "No users";
var aging = null;
if (users === "No users" || aging === null) {
    console.log("We need to find some users!");
}
else {
    if (age <= 2) {
        console.log("Baby");
    }
    else if (age <= 7 && age > 2) {
        console.log("Child");
    }
    else if (age <= 13 && age > 7) {
        console.log("Kid");
    }
    else if (age <= 21 && age > 13) {
        console.log("Teenager");
    }
    else if (age <= 65 && age > 21) {
        console.log("Adult");
    }
    else {
        console.log("Elder");
    }
}
console.log("We need to find some users!");
32.;
var currentusers = ["harry", "harvey", "haris", "hira", "hanzala"];
var newusers = ["hamza", "hassan", "hira", "hannah", "HARRY"];
for (var i = 0; i <= 4; i++) {
    if (currentusers.includes(newusers[i]) || currentusers.includes((newusers[i]).toLowerCase())) {
        console.log((i + 1) + '. ' + "The name is not availaible, please choose a different one.");
    }
    else {
        console.log((i + 1) + '. ' + "The name is available.");
    }
}
33.;
var ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 1; i <= 3; i++) {
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
for (var i = 4; i < ordinal.length; i++) {
    console.log(i + ".", i + "th.");
}
34.;
var pizzas = ["Fajita", "Chessy", "Tikka"];
for (var index in pizzas) {
    console.log("".concat(pizzas[index]));
    console.log("i like ".concat(pizzas[index], " pizza."));
}
console.log("i just love eating pizzas, ".concat(pizzas[0], " is my favorite pizza, i eat it often. however, ").concat(pizzas[1], " and ").concat(pizzas[2], " are also not bad."));
35.;
var animals = ["cat", "cheeta", "lion"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("".concat(animals[0], " is a pet, ").concat(animals[1], " climbs tree well. ").concat(animals[2], " is me. hehe!!"));
console.log("all are from cat family");
36.;
function make_shirt(size, message) {
    console.log("Make a shirt of size ".concat(size, " with the message \"").concat(message, "\""));
}
make_shirt("medium", "JUST DO IT");
37.;
function make_shirts(size) {
    if (size === void 0) { size = "large"; }
    if (size === "large" || size === "medium") {
        console.log("I love Typescript!");
    }
    else {
        console.log("I love me!");
    }
}
make_shirts();
38.;
function describe_city(city, country) {
    if (country === void 0) { country = "America"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("NYC", "America");
describe_city("Islamabad", "Pakistan");
describe_city("Singapore", "Singapore");
39.;
function city_country(city, country) {
    console.log("".concat(city, ", ").concat(country));
}
city_country("Gujranwala", "Pakistan");
city_country("Djibouti", "Djibouti");
city_country("Amsterdam", "Netherlands");
40.;
function make_album(arname, alname) {
    var ob = {
        ArtistName: arname,
        AlbumName: alname
    };
    console.log(ob);
}
make_album("Micheal Jackson", "Thriller");
make_album("Billie Eilish", "Happier Than Ever");
make_album("Wake Up", "BTS");
41.;
var magician = ["David Copperfield", "Doug Henning", "Lance Burton", "Harry Anderson", "Cyril Takayama"];
function show_magicians(magicians) {
    for (var index_1 = 0; index_1 < magicians.length; index_1++) {
        var element = magicians[index_1];
        console.log(element);
    }
}
show_magicians(magician);
42.;
var magicians = ["David Copperfield", "Doug Henning", "Lance Burton", "Harry Anderson", "Cyril Takayama"];
function city_Country(magicians) {
    for (var index_2 = 0; index_2 < magicians.length; index_2++) {
        var element = magicians[index_2];
        console.log("".concat(element, " the Great"));
    }
}
city_Country(magicians);
43.;
var magicianz = ["David Copperfield", "Doug Henning", "Lance Burton", "Harry Anderson", "Cyril Takayama"];
var magicians2 = ["David Copperfield", "Doug Henning", "Lance Burton", "Harry Anderson", "Cyril Takayama"];
function make_great(magicians2) {
    for (var index_3 = 0; index_3 < magicians2.length; index_3++) {
        var magicians3 = (magicians2[index_3] + " the Great");
        console.log(magicians3);
    }
}
make_great(magicians2);
function show_magicians1(magicianz) {
    for (var index_4 = 0; index_4 < magicians.length; index_4++) {
        var element = magicians[index_4];
        console.log(element);
    }
}
show_magicians1(magicianz);
function show_magicians2(magicians2) {
    for (var index_5 = 0; index_5 < magicians2.length; index_5++) {
        var magicians3 = (magicians2[index_5] + " the Great");
        console.log(magicians3);
    }
}
show_magicians2(magicians2);
44.;
function sandwich(items, extras) {
    console.log("A sandwich with ".concat(items, " is being ordered along with ").concat(extras, "."));
}
;
sandwich(["chicken", "cheese"], "fries");
sandwich(["lettuce", "beef"], "drinks");
sandwich(["mozarella", "beef"], "The Five Sauces");
45.;
function car_details(manu, mod, color, alloy) {
    var car = {
        manu: manu,
        mod: mod,
        arbitary_num: {
            color: color,
            alloywheels: alloy
        }
    };
    console.log(car);
}
car_details("Beetle", "Volkswagen");
car_details("Versa", "Nissan", "Jet Black");
car_details("Rio", "Kia", "Pink", "Front Wheels");
