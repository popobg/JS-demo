const prompt = require('prompt-sync')();

const sentence = prompt('Alez-y, parlez-moi : ');

console.log(`La longueur de votre phrase est de : ${sentence.length} caractères.`);
console.log(`En majuscules : ${sentence.toUpperCase()}`);
console.log(`Le mot 'JAVASCRIPT' est présent dans la phrase (sans prendre en compte la casse) : ${sentence.toUpperCase().includes("JAVASCRIPT")}`);