const Arrfibonacci: number[] = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

function sumReducer(accumulator: number, currentValue: number): number {
    return accumulator + currentValue;
}

const sumArr = Arrfibonacci.reduce(sumReducer, 0);
console.log(sumArr);

const initialValue = 0;
const sumWithInitial = Arrfibonacci.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);