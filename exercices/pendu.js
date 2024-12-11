// FUNCTIONS
function getRandomWord() {
    const words = ['flower', 'socket', 'spider', 'porte-clef'];
    return words[Math.floor(Math.random() * words.length)];
}

function InitializeGuessedLetters(word) {
    const obj = {};

    for (let i = 0; i < word.length; i++) {
        obj[word[i]] = false;
    }

    return obj;
}

function fillWordToDisplay(obj, word) {
    let str = "";
    const keys = Object.keys(obj);

    for (let i = 0; i < word.length; i++) {
        if (obj[word[i]] === true) {
            str += word[i];
        }
        else {
            str += '_';
        }
    }
    return str;
}

// MAIN
(function main() {
    const prompt = require('prompt-sync')();
    const wordToGuess = getRandomWord();
    const guessedLetters = InitializeGuessedLetters(wordToGuess);
    let win = false;
    const tries = wordToGuess.length * 2;

    for (let i = 0; i < tries; i++) {
        const currentState = fillWordToDisplay(guessedLetters, wordToGuess);
        if (!currentState.includes('_')) {
            win = true;
            break;
        }

        console.log(`Mot à deviner : ${currentState}`);
        console.log(`Il vous reste ${tries - i} tentatives.`);

        let input;
        do {
            input = prompt('Proposez une lettre ou un tiret : ');
        } while (!input.match(/^[a-zA-Z\-]$/g));

        input = input.toLowerCase();

        if (wordToGuess.includes(input)) {
            guessedLetters[input] = true;
            console.log(`Le caractère ${input} est présente dans le mot !`);
            console.log();
        }
        else {
            console.log(`Le caractère ${input} n'est pas présente dans le mot.`);
            console.log();
        }
    }

    if (win === true) {
        console.log(`Bravo, vous avez trouvé le mot ${wordToGuess} !`);
    }
    else {
        console.log(`Dommage, le mot état ${wordToGuess}.`);
    }
})();