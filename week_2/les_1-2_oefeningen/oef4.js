const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);
}

for (const letter of "Hello") {
    console.log(letter);
}

const colors = ['red', 'blue', 'green', 'yellow'];

colors.forEach((color, index) => {
    console.log(`Kleur ${index + 1}: ${color}`);
});