function elevesNoteSuperieureA(min, arr) {
    return arr.filter(e => e.note > min);
}

function avg(arr) {
    const avg = arr.reduce((acc, e) => acc + e.note, 0) / arr.length;
    return avg;
}

const eleves = [
    {nom: "Georges", note: 15},
    {nom: "Tom", note: 7},
    {nom: "Chloé", note: 12},
    {nom: "Jérémy", note: 19},
    {nom: "Lola", note: 13}
];

console.log(elevesNoteSuperieureA(12, eleves));
console.log(elevesNoteSuperieureA(15, eleves));
console.log(avg(eleves));