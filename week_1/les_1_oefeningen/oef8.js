const global = 10;

function randomFunction() {
    const global = 20;
    console.log(global) // 20
    return global;
}

console.log(global); // 10
