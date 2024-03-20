const ArrNumber : number [] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const found = ArrNumber.find((element) => element % 2 === 0);

console.log(found);