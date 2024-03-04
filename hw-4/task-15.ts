function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

const minRange1: number = 1;
const maxRange1: number = 4;
const randomFloat: number = getRandomFloat(minRange1, maxRange1);
console.log(randomFloat); 