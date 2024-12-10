function getFullName(first_name, last_name) {
    const capitalize = (s) => s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "";
    return `${capitalize(first_name)} ${capitalize(last_name)}`;
}

console.log(getFullName('michel', 'blanc'));
console.log(getFullName('marie', 'rose'));
console.log(getFullName('Emilie', 'BLEU'));
console.log(getFullName('Anne', ''));