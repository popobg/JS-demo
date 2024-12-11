class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }

    toString() {
        console.log(`Voiture de marque ${this.marque}, de modèle ${this.modele}, sortie l'année ${this.annee}.`)
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }

    manger() {
        console.log(`${this.name} is eating.`)
    }
}

class Chat extends Animal {
    miauler() {
        console.log("meowwww");
    }
}

(function () {
    const peugeot206 = new Voiture("Peugeot", "206", 2001);
    const fordFiesta = new Voiture("Ford", "Fiesta", 2011);

    console.log("Classe voiture");
    console.log(peugeot206);
    console.log(fordFiesta);
    peugeot206.toString();
    fordFiesta.toString();

    console.log();
    console.log("Classe animal");
    const dog = new Animal("Medor");
    dog.manger();
    const cat = new Chat("Félix");
    cat.manger();
    cat.miauler();

    // Ajout d'attributs
    cat.age = 5;
    // Ajout de méthodes
    cat.saluer = () => {
        console.log("Salut !")
    }

    console.log(cat);
    cat.saluer();
})();
