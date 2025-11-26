function checkScoping() {
    const a = 50;

    if (true) {
        const a = 75;
        console.log(a); // 75 - Block scoping! Daarom kan ik hier aan nieuwe "a" aanmaken.
    }

    console.log(a); // 50
}

checkScoping();