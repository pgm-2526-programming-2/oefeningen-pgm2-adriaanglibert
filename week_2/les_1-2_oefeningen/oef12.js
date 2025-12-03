function checkRow(row, checkerList) {

}

function checker(matrix, checkerList) {
    const rowArr = matrix.flatMap(row => row.join(''));
    row.find(rowText => rowText.includes())
}

let crosswords = [
    ['h', 'a', 'p', 'p', 'y'],
    ['e', ' ', ' ', ' ', ' '],
    ['l', ' ', 'a', 'c', 'e'],
    ['l', ' ', ' ', ' ', ' '],
    ['o', ' ', ' ', ' ', ' '],
];

let list = ['hello', 'ace', 'happy'];
console.log(checker(crosswords, list));