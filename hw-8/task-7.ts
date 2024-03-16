const NewArr: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const isEvenSum = NewArr.every((num) => {
    const square = num ** 2;
    return square % 2 === 0;
});
console.log(isEvenSum);

function getResult(value: number) {
    const square = value ** 2;
    return square % 2 === 0;
}
const getAnswer = NewArr.every(getResult);
console.log(getAnswer);
