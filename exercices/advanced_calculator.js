const calculerAvance = (n1, n2, operator) => operator(n1, n2);

const puissance = (n1, n2) => Math.pow(n1, n2);
const reste = (n1, n2) => n1 % n2;

console.log(calculerAvance(2, 3, puissance));
console.log(calculerAvance(18, 4, reste));