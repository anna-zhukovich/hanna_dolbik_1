let firstCar: { doorcount: number, sidehandlebar: string } = {
    doorcount: 7,
    sidehandlebar: "left-hand"
}


let secondCar: { doorcount: number, sidehandlebar: string } = {
    doorcount: 4,
    sidehandlebar: "right-hand"
}

function getInfoCar(this: { doorcount: number, sidehandlebar: string }): string {
    return `This car has ${this.doorcount} doors and this is ${this.sidehandlebar} drive car`;
} 

console.log(getInfoCar.call(firstCar));
console.log(getInfoCar.call(secondCar));
