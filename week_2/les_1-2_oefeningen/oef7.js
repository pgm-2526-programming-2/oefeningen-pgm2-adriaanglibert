const randomNamesArray = [
    ['Alice', 'Bob', 'Charlie'],
    ['David', 'Eva', 'Frank'],
    ['Grace', 'Hank', 'Ivy'],
    ['Jack', 'Kelly', 'Liam']
];

const flattenedNames = randomNamesArray.flat();

// const flattenedAndDoubled = randomNamesArray.flatMap((item) => {
//     return item;
// });

const smallerNamesList = randomNamesArray.map(row => {
    row.shift();
    return row;
});

randomNamesArray.pop();