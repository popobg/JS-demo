// module node importé
const prompt = require('prompt-sync')({signint : true});

const number1 = parseFloat(prompt('Entrez votre premier nombre : '));
const number2 = parseFloat(prompt('Entrez votre deuxième nombre : '));

console.log(`Addition : ${number1} + ${number2} = ${number1 + number2}.`);
console.log(`Soustraction : ${number1} - ${number2} = ${(number1 - number2)}.`);
console.log(`Multiplication : ${number1} * ${number2} = ${(number1 * number2)}.`);
console.log(`Division : ${number1} / ${number2} = ${(number1 / number2)}.`);