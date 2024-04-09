import { NewCar } from './car';
import { BMW } from './class1-car';
import { Ford } from "./class2-car";

let bmw: any = new BMW("BMW", "Sedan", 240, 50000);
bmw.speedCar();

let ford: any = new Ford("Ford", "Universal", 2023, "left");
ford.setYear(2000);