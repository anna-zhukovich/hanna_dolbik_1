const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();


const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();


console.log(`Текущая дата: ${day}/${month}/${year}; Текущее время ${hours}:${minutes}:${seconds}.`);






///Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день. 
//Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.