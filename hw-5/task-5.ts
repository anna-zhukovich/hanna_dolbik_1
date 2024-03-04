function getSum1(a: number, b: number): number {
    if (a === b) {
        return a;
    } else {
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    }
}
let resultGetSum1 = getSum1(1, 2);
console.log(resultGetSum1);
