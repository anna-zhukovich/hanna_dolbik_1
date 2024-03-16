function processPerson(obj: {name?: string, surname?: string, age?: string}) {
    const name = obj.name || ' No_name';
    const surname = obj.surname || 'No_surname';
    const age = obj.age || '? лет';
    return { name, surname, age };
}


const processPersonArrow = (obj: {name?: string, surname?: string, age?: string}) => {
    const name = obj.name || 'No_name';
    const surname = obj.surname || 'No_surname';
    const age = obj.age || '? лет';
    return { name, surname, age };
};


const person1 = {name: 'Петр', surname: 'Петров', age: '20 лет'};
const person2 = {name: 'Иван'};

console.log(processPerson(person1));
console.log(processPerson(person2)); 

console.log(processPersonArrow(person1)); 
console.log(processPersonArrow(person2));