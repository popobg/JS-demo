function calculateTotal(price, taxRate = 0.2) {
    return price + price * taxRate;
}

console.log(`Prix avec 2 arguments : ${calculateTotal(12, 0.5)} // attendu 18.`);
console.log(`Prix avec 1 argument : ${calculateTotal(12)} // attendu 14.4.`);