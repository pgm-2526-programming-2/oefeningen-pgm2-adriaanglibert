function combineAllArrays(...arrays) {
    console.log(arrays.flat())
    return arrays.flat();
}

combineAllArrays([10, 12], [5, 4]); // [10, 12, 5, 4]
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); // [10, 12, 5, 4, 6, 6]