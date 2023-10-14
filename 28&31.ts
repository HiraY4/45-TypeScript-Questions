var age = 2;
if (age < 2) {
    console.log(`baby`);
} 
else if (age >= 2 && age < 5) {
    console.log(`toddler`);
}
else if (age > 4 && age <= 13) {
    console.log('kid');
}
else if (age >= 14 && age <= 21) {
    console.log(`teenager`);
}
else if (age >= 21 && age <= 65) {
    console.log(`adilt`);
} else {
    console.log(`elder`);
}

// ---

let users: string = "No users"
let aging: any = null;

if (users === `No users` || aging === null) {
    console.log(`We need to find some users!`);
    } else {
            if (age <= 2) {
                console.log(`Baby`);
            }
            else if (age <= 7 && age > 2) {
                console.log(`Child`);
            }
            else if (age <= 13 && age > 7) {
                console.log(`Kid`);
            }
            else if (age <= 21 && age > 13) {
                console.log(`Teenager`);
            }
            else if (age <= 65 && age > 21) {
                console.log(`Adult`);
            } else {
                console.log(`Elder`);
            }
        }
    console.log(`We need to find some users!`);

