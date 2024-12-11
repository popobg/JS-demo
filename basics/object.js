// équivalent d'un dictionnaire ou d'une HashMap
// --> contient des références clé-valeur.
// La clé doit être unique.
const obj = {
    x : "b",
    y : 260,
    z : ["str1", "str2"],
    a : {},
    // overwrite le précédent a
    a : 25
};

// très retrouvé dans la v2 de Vue.js par exemple
const productManagerV1 = {
    products : [],

    // une valeur peut être une fonction
    add : (prod) => {
        obj.z.push(prod);
    }
}

// version plus actuelle
const productManagerV2 = {};
productManagerV2.products = [];

productManagerV2.add = (product) => {
    productManagerV2.products.push(product);
}

console.log(obj.a);     // 25