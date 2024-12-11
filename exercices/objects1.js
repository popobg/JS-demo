function analyseSentence(sentence) {
    console.log(sentence);
    // on split par espaces, virgules, points et apostrophes pour ne garder que les mots
    const arrSentence = sentence.trim().split(/[\s,.'0-9!?]+/);

    const result = {};

    for (let i = 0; i < arrSentence.length; i++) {
        arrSentence[i] = arrSentence[i].toLowerCase();

        if (arrSentence[i] === '') {
            continue;
        }

        // nb total de mots dans la phrase
        result.totalWords = (result.totalWords || 0) + 1;

        if (result.longestWords === undefined) {
            result.longestWords = [];
        }
        // trouver le mot le plus long
        if (result.longestWords.length === 0) {
            result.longestWords.push(arrSentence[i]);
        }
        else if (arrSentence[i].length > result.longestWords[0].length) {
            result.longestWords = result.longestWords.filter((element) => element.length < longueurMax);
            result.longestWords.push(arrSentence[i]);
        }
        else if (!result.longestWords.includes(arrSentence[i])
            && arrSentence[i].length === result.longestWords[0].length) {
            result.longestWords.push(arrSentence[i]);
        }

        // nombre d'occurences du mot
        if (result.wordsOccurence === undefined) {
            result.wordsOccurence = {};
        }
        result.wordsOccurence[arrSentence[i]] = arrSentence.filter((e) => e === arrSentence[i]).length;
    }

    result.lengthLongestWord = result.longestWords[0].length;

    return result;
}

console.log(analyseSentence("Bonjour hello bonjour"));
console.log(analyseSentence("Bonjour hello bonjour !"));
console.log(analyseSentence("Bonjour hello bonjour!"));
console.log(analyseSentence("Bonjour hello bonjour bananes"));
console.log(analyserPhrase("Bonjour, j'aime les bananes et Qotin aussi aime les bananes ! qotin."));