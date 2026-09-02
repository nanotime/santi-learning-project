const min = (a: number, b: number): number => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(3, 7));
console.log(min(10, 2));