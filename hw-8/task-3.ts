const ArrnNumbers: number[] = [7, -4, 32, -90, 54, 32, -21];

const result = ArrnNumbers.filter((number: number) => number >= 0);
console.log(result);

function getNums(value : number) {
    return value >= 0;
}
const filtered = ArrnNumbers.filter(getNums);
console.log(filtered);