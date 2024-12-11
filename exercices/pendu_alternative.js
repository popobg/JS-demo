function getRandomWord() {
    const words = ['flower', 'socket', 'spider', 'porte-clef'];
    return words[Math.floor(Math.random() * words.length)];
}

// modifie la string initiale en passant par un tableau sur lequel on itère
// puis qu'on joint en string à nouveau
function maskWord(word, guessedLetters) {
    return [...word].map(letter => {
        return guessedLetters.includes(letter) ? letter : '*';
    }).join("");
}

(function () {
    const prompt = require('prompt-sync')();
    const word = getRandomWord();
    // tableau plutôt qu'un objet comme dans le pendu.js
    let guessedLetters = [];
    let maskedWord = maskWord(word, guessedLetters);
    let tries = word.length * 2;

    while (tries > 0) {
        console.log('Word : ' + maskedWord);
        console.log(tries + " tries left");

        let input;
        do {
            input = prompt('Type letter or dash: ');
        } while (!input.match(/^[a-zA-Z\-]$/g));

        input = input.toLowerCase();

        if (!word.includes(input) || guessedLetters.includes(input)) {
            tries--;
            continue;
        }

        guessedLetters.push(input);
        maskedWord = maskWord(word, guessedLetters);
        if (maskedWord === word) {
            console.log('You win !!!');
            return;
        }
    }

    console.log(`You lost. The word was : ${word}.`);
})();