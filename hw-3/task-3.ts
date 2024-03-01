let count = 42;
let userName = '42';

let countAsString1 = String(count);
let userNameAsNumber1 = Number(userName);

let countAsString2 = `${count}`;
let userNameAsNumber2 = +userName;

console.log("countAsString1:", countAsString1); 
console.log("userNameAsNumber1:", userNameAsNumber1);

console.log("countAsString2:", countAsString2); 
console.log("userNameAsNumber2:", userNameAsNumber2);