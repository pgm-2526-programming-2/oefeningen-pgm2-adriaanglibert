function printDetails({ name = '', age = 25, gender: "Unknown"}) {
    console.log(name, age, gender);
}

printDetails({ name: "Alice", age: 30, gender: "Female" }); // Output: Name: Alice, Age: 30, Gender: Female
printDetails({ name: "Bob" }); // Output:  Name: Alice, Age: 25, Gender: Unknown