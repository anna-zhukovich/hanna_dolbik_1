let firstPerson: { name: string } = {
    name: "Hanna"
}

let secondPerson: { name: string } = {
    name: "Alex"
}


function getInfoName(): string  {
    const personName = this.name;

    return `My name is ${personName}`
}


console.log(getInfoName.call(firstPerson));
console.log(getInfoName.call(secondPerson));