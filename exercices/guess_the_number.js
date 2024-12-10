const prompt = require('prompt-sync')();

const randomNumber = Math.round(Math.random()*100);
let flag = false;

for (let i = 0; i < 5; i++) {
    console.log('Devinez le nombre choisi par l\'ordinateur, compris entre 0 et 100.');
    console.log(`Il vous reste ${5 - i} essais.`);
    const guess = parseInt(prompt(""));

    if (isNaN(guess) || guess < 0 || guess > 100) {
        console.log("Vous devez proposer un nombre valable.");
        console.log();
        continue;
    }

    if (guess == randomNumber) {
        flag = true;
        break;
    }
    else if (guess < randomNumber) {
        console.log('Le nombre à deviner est plus grand que votre proposition.');
        console.log();
    }
    else {
        console.log('Le nombre à deviner est plus petit que votre proposition.');
        console.log();
    }
}

if (flag) {
    console.log("Bravo ! Vous avez deviné le nombre !");
}
else {
    console.log("Dommage, vous n'avez pas trouvé le nombre à l'issue des 5 essais.");
    console.log(`Le nombre était : ${randomNumber}.`);
}