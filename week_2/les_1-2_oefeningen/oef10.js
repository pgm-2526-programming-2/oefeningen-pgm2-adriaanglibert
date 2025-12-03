function filterEvenNumbers(numbers) {
    return numbers.filter(num => !(num % 2));
}

let randomNumber = [3, 8, 15, 6, 10, 7];
let evenNumbers = filterEvenNumbers(randomNumber);
console.log(evenNumbers); // geeft [8, 6, 10]