function addition(number1, number2) {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if (isNaN(number1) || isNaN(number2)) {
        return;
    }

    return number1 + number2;
}

// fonction fléchée
const soustraction = (number1, number2) => {
    return number1 - number2;
}

// return implicite
const multiplication = (number1, number2) => number1 * number2;

const result = addition(5.1, 6);
console.log(result);
console.log(addition(5, '6.2'));
console.log(addition('eofe', 'eife'));      // undefined

console.log(soustraction(5, 6));

console.log(multiplication(5, 6));