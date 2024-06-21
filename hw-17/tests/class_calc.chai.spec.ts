import Calculator from '../src/class_calc';
import { expect } from 'chai';

describe('Chai test', function () {
    let calculator1: Calculator;

    before(function () {
        calculator1 = new Calculator();
    });

    it('1- Check the addition of positive integers', function () {
        const result = calculator1.sum(5, 3);
        expect(result).to.equal(8);
    });

    it('2- Сheck the addition of fractional numbers', function () {
        const result = calculator1.sum(1.5, 3.5);
        expect(result).to.equal(5);
    });

    it('3 - Check the multiplication of negative numbers', function () {
        const result = calculator1.multiplication(-1, -3);
        expect(result).to.equal(3);
    });

    it('4 - Сheck the division of an integer by a fractional number', function () {
        const result = calculator1.division(2, 0.5);
        expect(result).to.equal(4);
    });

    it('5 - Сheck the subtraction of two integers', function () {
        const result = calculator1.subtraction(2, 1);
        expect(result).to.equal(1);
    });

    it('6 - Check the division by 0', function () {
        expect(function () {
            calculator1.division(2, 0);
        }).to.throw(Error, 'Can not be division by 0');
    });

    it('7 - Check the division of a number by a string', function () {
        expect(function () {
            calculator1.division(2, 'test' as any);
        }).to.throw(Error, 'Arguments should be numbers');
    });

    it('8 - should throw an error when multiplying a number by a string', function () {
        expect(function () {
            calculator1.multiplication(2, 'test' as any);
        }).to.throw(Error, 'Arguments should be numbers');
    });

    it('9 - Check the division by an empty string', function () {
        expect(function () {
            calculator1.division(2, '' as any);
        }).to.throw(Error, 'Arguments should be numbers');
    });

    it('10 - Check the addition of the empty string with string', function () {
        expect(function () {
            calculator1.sum('' as any, '' as any);
        }).to.throw(Error, 'Arguments should be numbers');
    });
});
