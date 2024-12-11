let animaux = ['chat', 'chien'];

// copie de la référence = position en mémoire du tableau,
// et non des valeurs du tableau
let animauxCopyRef = animaux;

// copie par valeur --> nouveau tableau avec les valeurs du tableau
// à un instant T
let animauxCopyValue = [... animaux];

// l'ajoute aux deux tableaux
animaux.push("souris");

console.log(animaux);
console.log(animauxCopyRef);
console.log(animauxCopyValue);