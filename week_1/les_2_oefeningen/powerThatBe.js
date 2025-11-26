function calcPower(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return base * calcPower(base, exponent - 1);
}

console.log(calcPower(2, 3));