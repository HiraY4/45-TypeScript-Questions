let magicians = ["David Copperfield", "Doug Henning", "Lance Burton", "Harry Anderson", "Cyril Takayama"] 
function city_Country(magicians:string[]) {
        for (let index = 0; index < magicians.length; index++) {
        const element = magicians[index];
        console.log(`${element} the Great`);
    }
}
city_Country(magicians)

// ---

let magicianz = ["David Copperfield", "Doug Henning", "Lance Burton", "Harry Anderson", "Cyril Takayama"] 
let magicians2 = ["David Copperfield", "Doug Henning", "Lance Burton", "Harry Anderson", "Cyril Takayama"] 

function make_great(magicians2:string[]) {
    for (let index = 0; index < magicians2.length; index++) {
        let magicians3 = (magicians2[index] + " the Great")
        console.log(magicians3);
    }
}
make_great (magicians2)

function show_magicians1(magicianz:string[]) {
    for (let index = 0; index < magicians.length; index++) {
        const element = magicians[index];
        console.log(element);
    }
}
show_magicians1(magicianz)

function show_magicians2(magicians2:string[]) {
    for (let index = 0; index < magicians2.length; index++) {
        let magicians3 = (magicians2[index] + " the Great")
        console.log(magicians3);
    }
}
show_magicians2(magicians2)

