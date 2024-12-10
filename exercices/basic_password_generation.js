const prompt = require('prompt-sync')({signint : true});

const passwordLength = parseInt(prompt('Combien de caractères voulez-vous dans votre mot de passe ? '));

const alphanumCharacters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';
let randomPassword = "";

for (let i = 0; i < passwordLength; i++) {
    let randomPosition = Math.round(Math.random()*61);
    console.log(randomPosition);
    randomPassword += alphanumCharacters.charAt(randomPosition);
}

console.log(randomPassword);