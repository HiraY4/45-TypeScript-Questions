let currentusers: string[] = [`harry`,`harvey`,`haris`,`hira`,`hanzala`]
let newusers: string[] = [`hamza`,`hassan`,`hira`,`hannah`,`HARRY`]

for (let i = 0; i <= 4; i++) {
    if ( currentusers.includes(newusers[i]) || currentusers.includes((newusers[i]).toLowerCase()) ) {
        console.log((i + 1) + '. ' + `The name is not availaible, please choose a different one.`);
    } else {
        console.log((i + 1) + '. ' + `The name is available.`);
    }
}
