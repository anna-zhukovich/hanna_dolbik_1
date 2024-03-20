const numbersArray: number[] = [
    1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4,
    5, 61, 2, 4, 5, 6, 3, 5,
];
const mySet: Set<number> = new Set(numbersArray);
const unique = (numbersSet: Set<number>): number[] => Array.from(numbersSet);

const uniqueNumbers: number[] = unique(mySet);
console.log(uniqueNumbers);

function uniqueValues(numbersArray: number[]): number[] {
    return Array.from(new Set(numbersArray));
}

const uniqueNumber: number[] = uniqueValues(numbersArray);
console.log(uniqueNumber);
