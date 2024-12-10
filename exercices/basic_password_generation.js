const prompt = require('prompt-sync')({signint : true});

const password_length = parseInt(prompt('Combien de caractères voulez-vous dans votre mot de passe ? '));

const alphanum_characters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';
let random_password = "";

for (let i = 0; i < password_length; i++) {
    let random_position = Math.round(Math.random()*61);
    console.log(random_position);
    random_password += alphanum_characters.charAt(random_position);
}

console.log(random_password);