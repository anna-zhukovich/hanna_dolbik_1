function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let minRange: number = 1;
let maxRange: number = 4;
let randomNum: number = getRandomInt(minRange, maxRange);
console.log(randomNum); 






