const firstName = 'Jan'; // Primitief
const age = 20; // Primitief
const isStudent = true; // Primitief
const hobbies = ['Gaming', 'Soccer']; // Samengesteld of reference type
const address = {
    street: 'New York Straat',
    number: 4
} // Samengesteld of reference

let nickname = firstName;
const interests = hobbies;
const todos = interests;

nickname = 'GamerBoy';
interests.push('Kitesurfen');


console.log(interests, hobbies, todos);

let total = 0;

function addFiveToNumber(a = 0) {
    total = a + 5;
    console.log(a + 5);
}

addFiveToNumber(2)
console.log('Totaal:', total);

function doubleNumber(num) {
    const newNumberInMemory = 5
    num = num * 2;
    console.log('Binnen functie: ', num);
}

function doubleNumberWithReference(obj) {
    
    obj.number = obj.number * 2;
    console.log('Binnen ref-functie: ', obj.number);
}

let originalNumber = 5;
let originalNumberAsReferenceType = {
    number: 5
}


doubleNumber(originalNumber);
doubleNumberWithReference(originalNumberAsReferenceType)
console.log('Original number uit functie', originalNumber);
console.log('Original number uit ref-functie', originalNumberAsReferenceType.number);