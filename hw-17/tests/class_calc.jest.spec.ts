import { Calculator } from '../src/class_calc';

describe('Jest tests', function () {
    let calculator2: Calculator;

    beforeAll(function () {
        calculator2 = new Calculator();
    });

    test('1- Check the addition of positive integers', function () {
        expect(calculator2.sum(-2, 3)).toBe(1);
    });

    test('2- Сheck the addition of fractional numbers', function () {
        expect(calculator2.sum(1.5, 3.5)).toBe(5);
    });

    test('3 - Check the multiplication of negative numbers', function () {
        expect(calculator2.multiplication(-1, -3)).toBe(3);
    });

    test('4 - Сheck the division of an integer by a fractional number', function () {
        expect(calculator2.division(2, 0.5)).toBe(4);
    });

    test('5 - Сheck the subtraction of two integers', function () {
        expect(calculator2.subtraction(2, 1)).toBe(1);
    });

    test('6 - Check the division by 0', function () {
        expect(function () { 
            calculator2.division(2, 0)
        }).toThrow('Can not be division by 0');
    });

    test('7 - Check the division of a number by a string', function () {
        expect(function () {
            calculator2.division(2, 'test' as any);
        }).toThrow(Error('Arguments should be numbers'));
    });

    test('8 - should throw an error when multiplying a number by a string', function () {
        expect(function () {
            calculator2.multiplication(2, 'test' as any);
        }).toThrow(Error('Arguments should be numbers'));
    });

    test('9 - Check the division by an empty string', function () {
        expect(function () {
            calculator2.division(2, '' as any);
        }).toThrow(Error('Arguments should be numbers'));
    });

    test('10 - Check the addition of the empty string with empty string', function () {
        expect(function () {
            calculator2.sum('' as any, '' as any);
        }).toThrow(Error('Arguments should be numbers'));
    });
});
