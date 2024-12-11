// filter et map ne modifient pas le tableau en place, il faut donc utiliser let
let notes = [];

const add = (note) => notes.push(note);

// équivalent de reduce : accumulateur déclaré avant, puis un map.
// const sum = () => {
//     let somme = 0;
//     notes.map( (note) => somme += note);
//     return somme;
// }

const sum = () => {
    // on utilise un accumulateur --> on part de plusieurs éléments pour arriver à un seul
    return notes.reduce((acc, note) => acc += note, 0);
}

const avg = () => {
    return sum() / notes.length;
}

const remove = (noteToRemove) => {
    // récupère seulement les éléments qui remplissent la condition
    // et crée un nouveau tableau à partir de ces éléments
    notes = notes.filter((n) => n !== noteToRemove);
    return notes;
}

const addOneToNote = () => {
    notes = notes.map((note) => note+= 1);
    return notes;
}

addItem(18);
addItem(15);
addItem(7);

console.log(notes);
console.log(sum());
console.log(avg());

notes = removeItem(7);
notes = addOneToNote();

console.log(notes);
console.log(sum());
console.log(avg());