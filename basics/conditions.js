const age = 35;

if (age > 18) {
    console.log("Vous êtes majeur.");
}
else {
    console.log("Vous êtes mineur.");
}

// && = AND
if (age > 18 && age < 60) {
    console.log("Vous êtes un adulte.");
}
// || = OU
else if (age < 18 || age > 100) {
    console.log("Vous êtes dans les extrêmes !");
}
else {
    console.log("Vous êtes un senior.");
}

// != = NOT
if(age !== 18) {
    console.log("Vous n'avez pas 18 ans.");
}

// L'égalité stricte ===
if (age === 35) {
    console.log("Vous avez 35 ans.");
}

const string_age = '35';

// == : égalité malgré une différence de type (cast implicite)
console.log(string_age == age);
// === : égalité stricte
console.log(string_age === age);