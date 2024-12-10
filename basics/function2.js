const operation = (n1, n2, operator) => {
    return operator(n1, n2);
}

const multiply = (n1, n2) => n1 * n2;
const addition = (n1, n2) => n1 + n2;

console.log(multiply(5, 6));
console.log(addition(5, 6));

// closure : 1 fonction dans une autre
// l'état de la première fonction est sauvegardé.
const createCounter = () => {
    // ce contexte n'est pas remis à 0 au return de l'autre fonction
    let i = 0;
    return function () {
        i = i + 1;
        return i;
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log('counter 1 : ' + counter1());
console.log('counter 2 : ' + counter2());
console.log('counter 1 : ' + counter1());
console.log('counter 1 : ' + counter1());
console.log('counter 1 : ' + counter1());
console.log('counter 2 : ' + counter2());

// print hello au bout de 3 secondes
setTimeout(() => console.log("Hello"), 3000);

// debounce : timeout + closure --> l'action ne sera exécutée qu'après un certain temps
// après le dernier appel de la fonction
const debounce = (callback, delay) => {
    let timer;

    return function () {
        // au cas où un autre timer était lancé
        clearTimeout(timer);
        timer = setTimeout(() => callback(), delay)
    }
}

// Attends 2sec : apparaîtra avant "hello" dans la console
const btn = debounce(() => console.log("Last click."), 2000);
btn();
setTimeout(() => console.log("Click"), 1000);
btn();
setTimeout(() => console.log("Real last click"), 3500);
btn();