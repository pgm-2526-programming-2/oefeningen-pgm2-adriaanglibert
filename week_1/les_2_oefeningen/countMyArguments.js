function countMyArguments(...args) {
    console.log(args.reduce((a, b) => a + b));
}

countMyArguments(3, 5, 2);
countMyArguments(50, 10, 5, 1, 2);