const words = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];

const wordsAsString = words.join(' - ');
const someWordStartsWithB = words.some((word) => word[0].toLowerCase() === 'b');
words.unshift("Hello");
const everyWordAtLeastThreeChars = words.every(word => word.length > 2);
words.sort();
const thirdEl = words.at(2);
const longWords = words.filter(word => word.length > 4);