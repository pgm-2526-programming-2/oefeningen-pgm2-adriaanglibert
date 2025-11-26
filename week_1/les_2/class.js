class Student {
    constructor(firstName, initialAge) {
        this.name = firstName;
        this.age = initialAge;
    }

    getOlder() {
        function increaseAge(initAge) {
            // 'this' slaat op de function.
            this.age = initAge + 1; // Geeft foutmelding.
        }

        const increaseAge = (initAge) => {
            // 'this' slaat op de Class zelf.
            this.age = initAge + 1; // Werkt want arrow functions hebben geen 'this' keyword.
        }

        increaseAge(this.age);
    }
}

// Functie met hoofdletter? Constructor!
function Person() {
    this.name = 'Adriaan';
    this.age = 30;

    this.sayHello = () => {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const favoriteStudent = new Student('Jan', 20);
const newStudent = new Student('Mert', 25);
const erasmusStudent = new Student('Juan', 21);

const teacher = new Person();

console.log(favoriteStudent.age, favoriteStudent.name, favoriteStudent.getOlder());