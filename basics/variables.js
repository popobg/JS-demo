var a = 1;
let b = 2;
/* impossible de changer sa valeur, ou de réutiliser
le nom de la variable ailleurs dans le script. */
const c = 3;

a = 21;
b = 22;
// c = 6 ==> impossible

console.log(a, b, c);
console.log("a + c = " + (a + c));
console.log("a * c = " + (a * c));
console.log("a / c = " + (a / c));
console.log("a % c = " + (a % c));
console.log("b - a = " + (b - a));

const decimal1 = 2.554946;
const decimal2 = 2.49;

// Génère un nombre aléatoire entre 0 et 1
console.log("Nombre aléatoire :" + Math.random());
// Arrondit au plus proche
console.log("Décimal 2.554946 arrondit à l'entier le plus proche : " + Math.round(decimal1));
console.log("Décimal 2.49 arrondit à l'entier le plus proche : " + Math.round(decimal2));

console.log("Pourcentage aléatoire : " + Math.round(Math.random() * 100) + "%");
