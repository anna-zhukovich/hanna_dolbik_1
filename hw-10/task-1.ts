class Car {
    protected brand: string;
    protected type: string;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.type = type;
    }
}

class SportCar extends Car{
    private maxSpeed: number;
    private carCost: number;

    constructor(brand: string, type: string, maxSpeed: number, carCost: number) {
        super(brand, type),
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }
    getInfo(): any {
        return `This is ${this.brand}`;
    }
}

class LuxuryCar extends Car{
    private maxSpeed: number;
    private carCost: number;

    constructor(brand: string, type: string, maxSpeed: number, carCost: number) {
        super(brand, type);
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }
    getAddInfo(): any {
        return `It has ${this.type} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}.`
    }
}

const myCar = new SportCar("Moskvich", "V8", 60, 100);
console.log(myCar.getInfo());

const myLuxuryCar = new LuxuryCar ("BMW", "5", 200, 50000);
console.log(myLuxuryCar.getAddInfo());