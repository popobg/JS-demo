function ajouterProduitPanier(produit, arr) {
    // vérifie si un produit du même nom est déjà présent dans le panier
    if (arr.filter((p) => p.nom === produit.nom).length === 1) {
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

const panier = [
    {nom : "produit 1", quantite : 3},
    {nom : "produit 2", quantite : 2},
    {nom : "produit 3", quantite : 5},
    {nom : "produit 4", quantite : 6},
    {nom : "produit 5", quantite : 0}
];

console.log(nbTotalProduits(panier));
console.log(ajouterProduitPanier({nom : "produit 6", quantite : 10}, panier));
console.log(ajouterProduitPanier({nom : "produit 1", quantite : 12}, panier));
console.log(ajouterProduitPanier({nom : "produit 4", quantite : 2}, panier));
console.log(nbTotalProduits(panier));