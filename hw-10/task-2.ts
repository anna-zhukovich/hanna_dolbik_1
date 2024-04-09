let firstPerson: { name: string } = {
    name: "Hanna"
}

let secondPerson: { name: string } = {
    name: "Alex"
}


function getInfoName(this: { name: string }): string {
    return `My name is ${this.name}`
}


console.log(getInfoName.call(firstPerson));
console.log(getInfoName.call(secondPerson));