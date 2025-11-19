const attendingStudents = require('./students.json');

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Oefening: multiply, division.

// Oefening: Maak een functie showCalculation die 3 parameters heeft. 2 getallen, en een van onze functies.

function showCalculation(a = 0, b = 0, func = sum) {
    console.log(func(a, b));
}

showCalculation(4, 5, sum);
showCalculation(4, 5, multiply);
showCalculation(4, 5);
showCalculation();

const name = 'Adriaan';
const division = () => { }
const multiplier = function () { }

// Oefening: Neem echt een random student!
function selectRandomStudent(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const age = 21;
const students = ['Alexander', 'Ruymesa', 'Hassan', '"Yaron"'];

console.log(sum(age, 12));
console.log(20);
console.log(selectRandomStudent(attendingStudents));

function showMessage(message) {
    console.log('Answer Checker Message', message);
}

function checkAnswer(answer, solution, callback) {
    if (answer === solution) {
        callback('✅');
        return true;
    }

    callback('❌');
    return false;
}

checkAnswer('Ja', 'Oplossing', showMessage);

