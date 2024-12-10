const prompt = require('prompt-sync')({signint : true});

const age = parseInt(prompt('Entrez votre âge : '));

if (age < 0 || age > 120) {
    console.log("Cet âge n'est pas possible.");
}
else if (age < 18) {
    console.log('Vous êtes mineur.');
}
else {
    console.log('Vous êtes majeur.');
}
