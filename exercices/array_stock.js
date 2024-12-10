function add(arr, itemAAjouter) {
    arr.push(itemAAjouter);
}

function remove(arr, itemASupprimer) {
    let newArr = arr.filter( (i) => i !== itemASupprimer);
    return newArr;
}

function isExisting(arr, itemRecherche) {
    return arr.includes(itemRecherche);
}

let produits = [];
add(produits, "produit 1");
add(produits, "produit 2");
add(produits, "produit 3");

console.log(produits);

produits = remove(produits, "produit 2");
produits = remove(produits, "produit 2");

console.log(produits);

console.log(isExisting(produits, "produit 1"));
console.log(isExisting(produits, "produit 2"));