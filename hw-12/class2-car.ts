import { NewCar } from "./car";

export class Ford extends NewCar {
    year: number;
    wheel: string;

    constructor(brand: string, type: string, year: number, wheel: string) {
        super(brand, type), (this.year = year);
        this.wheel = wheel;
    }

    setYear(year: number): any {
        if (year < 1850) {
            throw new Error('Car is too old');
        }
        this.year = year;
        console.log(`Year is -  ${year}`);
    }
}
