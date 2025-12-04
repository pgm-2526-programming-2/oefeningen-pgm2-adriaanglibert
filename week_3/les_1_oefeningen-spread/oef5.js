function add(...args) {
    console.log(args.length);
    return args.reduce((prev, curr) => prev + curr, 0);
}

add(1, 5, 6); // 3
add(1, 5, 6, 5, 1561, 2, 5); // 7