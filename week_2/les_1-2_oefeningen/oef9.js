let wordsArray = ['appel', 'peer', 'zeerlangfruit', 'kiwi', 'banaan'];

function getLongestWord(arr) {
    return arr.sort((word1, word2) => word2.length - word1.length)[0];
}

console.log(getLongestWord(wordsArray))