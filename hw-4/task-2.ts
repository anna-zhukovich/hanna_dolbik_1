let mainString = 'я учу typescript!';
let subString = 'учу';
let position = mainString.indexOf(subString);

console.log(mainString.includes(subString) ? `Позиция подстроки '${subString}': ${position}` : 'Данной подстроки нет');
