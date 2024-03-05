function checkTriangle(a: number, b: number, c: number) {
    if (a < 0 || b < 0 || c < 0) {
        return false;
    }

    const isValid = a + b > c && a + c > b && b + c > a;

    return isValid;
}
console.log(checkTriangle(2, 4, 3));
