function sortByProperty(arr, prop) {
    // 1. Create a shallow copy of the array using spread syntax
    const arrayCopy = [...arr];

    if (typeof arrayCopy[0][prop] === 'string') {
        // Sort the copy using localeCompare for strings
        return arrayCopy.sort((a, b) => a[prop].localeCompare(b[prop]));
    }

    // Sort the copy numerically
    return arrayCopy.sort((a, b) => a[prop] - b[prop]);
}

let people = [
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'Anna', age: 30 },
];

let sortedByName = sortByProperty(people, 'name');
let sortedByAge = sortByProperty(people, 'age');

console.log(sortedByName, sortedByAge);