// Functions
function addItem(arr, itemAAjouter) {
    arr.push(itemAAjouter);
}

function removeItem(arr, itemASupprimer) {
    // on peut aussi utiliser findIndex((i) => i === itemASupprimer) / indexOf(itemASupprimer),
    // puis arr.splice(index, 1)
    let newArr = arr.filter((i) => i !== itemASupprimer);
    return newArr;
}

function isItemExistingInArray(arr, itemRecherche) {
    return arr.includes(itemRecherche);
}

// Main
let produits = [];
addItem(produits, "produit 1");
addItem(produits, "produit 2");
addItem(produits, "produit 3");

console.log(produits);

produits = removeItem(produits, "produit 2");
produits = removeItem(produits, "produit 2");

console.log(produits);

console.log(isItemExistingInArray(produits, "produit 1"));
console.log(isItemExistingInArray(produits, "produit 2"));