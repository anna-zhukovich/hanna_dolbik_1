import { NewCar } from './car';

export class BMW extends NewCar {
    maxSpeed: number;
    carCost: number;

    constructor(brand: string, type: string, maxSpeed: number, carCost: number) {
        super(brand, type),
        this.maxSpeed = maxSpeed;
        this.carCost = carCost;
    }
    speedCar(): void {
        console.log(`Это максимальная скорость - ${this.maxSpeed}`);
    }
}