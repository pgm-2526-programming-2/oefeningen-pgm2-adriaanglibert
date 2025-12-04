function copyArray(arr) {
    return [...arr];
}

const originalArray = [1, 2, 3];
const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]
