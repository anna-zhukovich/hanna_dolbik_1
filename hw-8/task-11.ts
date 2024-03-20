function processObject(obj: { name?: string, surname?: string, age?: string }): [string, string, string] {
    const { name = 'Аноном', surname = 'Анонимович', age = '? лет' } = obj;
    return [name, surname, age];
}


//const processObjectArrow = (obj: { name?: string, surname?: string, age?: string }): [string, string, string] => {
//   const { name = 'Аноном', surname = 'Анонимович', age = '? лет' } = obj;
//   return [name, surname, age];
//};


const obj: { name?: string, surname?: string, age?: string } = { name: 'Петр', surname: 'Петров', age: '20 лет' };
const [name1, surname1, age1] = processObject(obj);
console.log(name1, surname1, age1); 

const obj2: { name?: string, surname?: string, age?: string } = { name: 'Мария' };
const [name2, surname2, age2] = processObject(obj2);
console.log(name2, surname2, age2); 
