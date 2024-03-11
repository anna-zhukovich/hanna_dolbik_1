const mixedNumbers: number[] = [-14, 24, -89, 43, 0, -1, 412, 4];
let positiveNumbers: number[] = [];
let negativeNumbers: number[] = [];

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0) {
        positiveNumbers.push(mixedNumbers[i]);
    } else {
        negativeNumbers.push(mixedNumbers[i]);
    }
}

console.log(positiveNumbers);
console.log(negativeNumbers);