function getSum(number1: number): number {
    let sum = 0;
    for (let i = 0; i <= number1; i++) {
        sum += i;
    }
    return sum;
}

let countRes = getSum(5);
console.log(countRes);
