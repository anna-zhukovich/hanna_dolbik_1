function getSumNumbers (myNumber: number ) {
    let str = `${myNumber}`;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let item = +str[i];
        sum +=item;
    }
    return sum;
}

let getResultSum = getSumNumbers(2024);
console.log(getResultSum);
