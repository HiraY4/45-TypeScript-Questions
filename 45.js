"use strict";
function car_details(manu, mod, color, alloy) {
    let car = {
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
