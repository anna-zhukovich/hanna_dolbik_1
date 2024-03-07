function getCountCut(n: number, m: number) {
    if (n <= 0 || m <= 0) {
        return 0;
    }
    let resultCut = n * m - 1;
    return resultCut;
}

console.log(getCountCut(-3, 2));
