const NewArr: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const isEvenSumArrowFunc = (num: number) => {
    const square = num ** 2;
    const sum = `${square}`.split('').reduce((sum: number, item: string) => {
        return sum + Number(item);
    }, 0);

    return sum % 2 === 0;
};

function isEvenSumFunc(num: number) {
    const square = num ** 2;
    const sum = `${square}`.split('').reduce((sum: number, item: string) => {
        return sum + Number(item);
    }, 0);

    return sum % 2 === 0;
};

const resultArrowFunc = NewArr.every(isEvenSumArrowFunc);
const resultFunc = NewArr.every(isEvenSumFunc);

console.log(resultArrowFunc, resultFunc);
