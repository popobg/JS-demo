const name = "Allan";
const surname = 'Allan';
const nickname = `Allan`;
const age = 35;

console.log("Bonjour " + name);
// Syntaxe plus récente : à privilégier --> bonne pratique
console.log(`Bonjour ${surname}, vous avez ${age}.`);

console.log("Allan inclue Al : " + surname.includes("Al"));
console.log(`Allan n'inclue pas aa : ` + nickname.includes("aa"));

console.log("4ème caractère de Allan : " + nickname.charAt(3));