function cutString(str: string, val1: number, val2: number): string {
    let trim = str.slice(val1, val2);
    return trim;
}

let resultCut = cutString('hello', 1, 3);
console.log(resultCut);
