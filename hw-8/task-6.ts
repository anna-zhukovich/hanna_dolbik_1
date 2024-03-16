const getArr: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const even = (element: number) => element % 3 === 0 && element % 5 === 0;
console.log(getArr.some(even));

function getNum(value: number) {
    return value % 3 === 0 && value % 5 === 0;
}
const filter = getArr.some(getNum);
console.log(filter);