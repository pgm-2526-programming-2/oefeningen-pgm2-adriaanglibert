function recursiveSum(num, total = 0) {
    if (num === 0) {
        return total;
    }

    total = total + num;
    num = num - 1;

    return recursiveSum(num, total);
}

function sumWithLoop(num) {
    let total = 0;

    for (let index = 1; index <= num; index++) {
        total += index;
    }

    return total;
}

console.log(recursiveSum(3))
console.log(sumWithLoop(3))
console.log(recursiveSum(4))