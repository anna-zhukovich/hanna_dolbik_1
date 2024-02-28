let t = 5;
const result1 = t % 5 === 0 && t % 3 === 0 ? 'Fiz' :
               t % 5 === 0 ? 'Buz' :
               t % 3 === 0 ? 'FizBuz' : '';

console.log(result1);