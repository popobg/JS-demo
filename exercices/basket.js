function mettreAJourPanier(produit, arr) {
    // vérifie si un produit du même nom est déjà présent dans le panier
    if (arr.filter((p) => p.nom === produit.nom && p.prix == produit.prix).length === 1) {
        let index = arr.findIndex(p => p.nom === produit.nom);
        arr[index].quantite = produit.quantite;
    }
    else {
        arr.push(produit);
    }

    return arr;
}

function nbTotalProduits(arr) {
    return arr.reduce((acc, e) => acc + e.quantite, 0);
}

function prixTotalProduits(arr) {
    return arr.reduce((acc, e) => acc + (e.quantite * e.prix), 0);
}

const panier = [
    {nom : "produit 1", quantite : 3, prix : 12.5},
    {nom : "produit 2", quantite : 2, prix : 3.99},
    {nom : "produit 3", quantite : 5, prix : 5},
    {nom : "produit 4", quantite : 6, prix : 27.9},
    {nom : "produit 5", quantite : 1, prix : 8.5}
];

console.log(nbTotalProduits(panier));
console.log(prixTotalProduits(panier));
console.log(mettreAJourPanier({nom : "produit 6", quantite : 10, prix : 10.5}, panier));    // ajoute un nouveau produit
console.log(mettreAJourPanier({nom : "produit 1", quantite : 12, prix : 12.5}, panier));    // met à jour la quantité du produit 1
console.log(mettreAJourPanier({nom : "produit 4", quantite : 2, prix : 27.9}, panier));     // met à jour la quantité du produit 4
console.log(nbTotalProduits(panier));
console.log(prixTotalProduits(panier));