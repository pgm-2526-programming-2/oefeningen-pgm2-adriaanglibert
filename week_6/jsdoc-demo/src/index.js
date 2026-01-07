/**
 * @file This is the main file of our application
 * @author Adriaan Glibert
 */

/**
 *  @typedef {{id: number|string, name: string, amountOfStudents: number, isFun: boolean}} CourseType
 */

/**
 * A definition of a Student Type
 * @typedef {Object} StudentType
 * @property {string} name The name of a student.
 * @property {number} age The age of a student.
 * @property {?string} gender The optional gender of a student.
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = "Adriaan";

/**
 * This is the info of a random student.
 * @type {StudentType}
 */
const student = {
    name: "Adriaan",
    age: 30
}

/**
 * A list of students who are physically in class.
 * @type {Array<string>}
 */
const students = [
    "Mert",
    "Ignace",
    "Arne",
    "Hasan",
    "Justin",
];

/**
 * This is a description of a course and its properties.
 * @type {CourseType}
 */
const course = {
    id: "1782-2682-169861-2869",
    name: "Programming 2: Advanced",
    amountOfStudents: 20,
    isFun: true
}

/**
 * This is the description of a second course.
 * @type {CourseType}
 */
const secondCourse = {
    id: "178291-2682-16922861-2869",
    name: "@Work 2: Advanced",
    amountOfStudents: 27,
    isFun: true
}

/**
 * This logs a message in our console.
 */
function sayHallo() {
    console.log('Hello');
}

/**
 * This function calculates the sum of two arguments.
 * @param {number} a A first number
 * @param {number} b A second number
 * @returns {string}
 */
function sum(a, b) {
    return `De som van ${a} en ${b} is ${a + b}`;
}