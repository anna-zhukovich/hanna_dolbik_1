function getSumNumbers(myNumber: number) {
    let str = `${myNumber}`;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += +str[i];
    }
    return sum;
}

let getResultSum = getSumNumbers(2024);
console.log(getResultSum);
