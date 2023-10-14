const workers: string[] = [`Eric`,`Hira`,`Admin`,`Sonia`,`Jawad`]

for (let i = 0; i < workers.length; i++) {
    if (i === 2) {
        console.log(`Hi there ${workers[i]}, would you like to see a status report?`);    
    } else {
        console.log(`Thank you ${workers[i]} for Logging in Again.` );
    }
}
