const randomNumbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1
);

const biggerThanTen = randomNumbers.filter(number => number > 10);
randomNumbers.pop();
randomNumbers.shift();
randomNumbers.push(5);
const areThereNumbersSmallerThenTwenty = randomNumbers.some(num => num < 20);
const numAsString = randomNumbers.join(' ');
const sum = randomNumbers.reduce((a, b) => { a + b }, 0);
const doubledNumbers = randomNumbers.map(num => num * 2);
const atLeastOneBiggerThenThirty = randomNumbers.some(num => num > 0);