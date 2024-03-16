const fibonacci: number[] = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

function getFibonacci(element: number) {
    console.log(element);
}
fibonacci.forEach(getFibonacci);
fibonacci.forEach((element: number) => console.log(element));
