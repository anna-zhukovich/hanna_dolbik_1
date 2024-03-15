const numbers = [5, 43, 63, 23, 90];
numbers.length = 0
console.log(numbers.length);

const   secondNumbers = [5, 43, 63, 23, 90];
secondNumbers.splice(0,secondNumbers.length);
console.log(secondNumbers.length);