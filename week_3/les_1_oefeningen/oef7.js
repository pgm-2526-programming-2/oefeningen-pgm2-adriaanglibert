function addOnlyNumbers(...inputs) {
    const numbers = inputs.filter(input => typeof input === 'number');
    const sum = numbers.reduce((prev, curr) => prev + curr, 0);
    console.log(`Er waren ${inputs.length} argumenten, de som van de getallen is ${sum}`);

    return sum;
}

addOnlyNumbers(1, 5, 6, "cat", "dog", 3); // Er waren 6 argumenten, de som van de getallen is 15.
