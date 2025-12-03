const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

function getItemFromMatrix(row, column) {
    const rowIndex = row - 1;
    const colIndex = column - 1;

    if (row > matrix.length || column > matrix[rowIndex].length) {
        return console.log('Het opgevraagde element bestaat niet.');
    }

    console.log(matrix[rowIndex][colIndex]);
}

getItemFromMatrix(1, 1); // 1
getItemFromMatrix(1, 3); // 3
getItemFromMatrix(2, 2); // 5
getItemFromMatrix(6, 8); // Het opgevraagde element bestaat niet.