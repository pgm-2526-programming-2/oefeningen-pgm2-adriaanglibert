const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function sumArrays(firstArr, secondArr) {
    return firstArr.map((num, i) => num + secondArr[i]);
}

console.log(sumArrays(array1, array2));