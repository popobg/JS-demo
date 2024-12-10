// filter et map ne modifient pas le tableau en place, il faut donc utiliser let
let notes = [];

const add = (note) => notes.push(note);

// const sum = () => {
//     let somme = 0;
//     notes.map( (note) => somme += note);
//     return somme;
// }

const sum = () => {
    return notes.reduce( (note, acc) => acc += note, 0);
}

const avg = () => {
    return sum() / notes.length;
}

const remove = (noteToRemove) => {
    notes = notes.filter( (n) => n !== noteToRemove);
    return notes;
}

const addOneToNote = () => {
    notes = notes.map( (note) => note+= 1);
    return notes;
}

add(18);
add(15);
add(7);

console.log(notes);
console.log(sum());
console.log(avg());

notes = remove(7);
notes = addOneToNote();

console.log(notes);
console.log(sum());
console.log(avg());