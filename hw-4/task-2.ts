let str1 = 'я учу typescript!';
let contain = 'учу';
let position = str1.indexOf(contain);

str1.includes(contain) ? console.log("Позиция подстроки 'учу':", position) : console.log('Данной подстроки нет');
