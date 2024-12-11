const analyserPhrase = (sentence) => {
    const result = {};

    const words = sentence.split(" ");

    // nb total de mot
    result.sentenceLenth = words.length;

    // mot le plus long
    result.longestWord = "";
    words.map((word) => {
        // Ternaire :
        // result.longestWord = word.length > result.longestWord.length ? word : result.longestWord;

        if (word.length > result.longestWord.length) {
            result.longestWord = word;
        }
    });

    // Avec reduce :
    result.longestWord = words.reduce((acc, word) => {
        if (word.length > acc.length) {
            return word;
        }
        return acc;
    })

    result.occurences = words.reduce((acc, word) => {
        // quand acc[word] n'existe pas, il est = undefined
        // if (acc[word] === undefined) {
        //     acc[word] = 1
        // } else {
        //     acc[word] = acc[word] + 1;
        // }

        // Ternaire avec || qui initialise la clé à 0 si elle est undefined
        acc[word] = (acc[word] || 0) + 1;

        return acc;
    }, {});

    return result;
}

console.log(analyseSentence("Bonjour, j'aime les bananes et Qotin aussi aime les bananes ! qotin."))