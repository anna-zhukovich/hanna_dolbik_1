export class Calculator {
    sum(a: number, b: number) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Arguments should be numbers');
        }

        if ((a as any) === "" || (b as any) === "") {
            throw new Error('Arguments should be numbers');
        }

        return a + b;
    }

    subtraction(a: number, b: number) {
        return a - b;
    }

    multiplication(a: number, b: number) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Arguments should be numbers');
        }

        return a * b;
    }
    division(a: number, b: number) {
        if (b === 0) {
            throw new Error('Can not be division by 0');
        }

        if (isNaN(a) || isNaN(b)) {
            throw new Error('Arguments should be numbers');
        }

        if ((a as any) === "" || (b as any) === "") {
            throw new Error('Arguments should be numbers');
        }

        return a / b;
    }
}

export default Calculator;