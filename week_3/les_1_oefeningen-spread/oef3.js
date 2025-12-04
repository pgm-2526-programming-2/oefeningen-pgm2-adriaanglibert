function addProperty(object, key, prop) {
    return {
        ...object,
        [key]: prop
    }
}

const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }