// import { Calculator } from './class_calc';
// import assert from "assert";

// const calculator = new Calculator();

// describe("Mocha + assert test", function() {
//     it("1 - Check the addition of positive integers", function() {
//         const result = calculator.sum(5, 3);
//         assert.equal(result, 8);
//     });
 
//     it("2 - Сheck the addition of fractional numbers", function() {
//         const result = calculator.sum(2.5, 2.5);
//         assert.equal(result, 5);
//     });
 
//     it("3 - Check the multiplication of negative numbers", function() {
//         const result = calculator.multiplication(-2, -5);
//         assert.equal(result, 10);
//     });

//     it("4 - Сheck the division of an integer by a fractional number", function() {
//         const result = calculator.division(2, 0.5);
//         assert.equal(result, 4);
//     });

//     it("5 - Сheck the subtraction of two integers", function() {
//         const result = calculator.subtraction(2, 1);
//         assert.equal(result, 1);
//     });

//     it("6 - Check the division by 0", function() {
//         assert.throws(function() {
//             calculator.division(2, 0); 
//         }, "Can not be division by 0"); 
//     });

//     it("7 - Check the division of a number by a string", function() {
//         assert.throws(function() {
//             calculator.division(2, "test" as any); 
//         }, "Can not divizion by string"); 
//     });

//     it("8 - should throw an error when multiplying a number by a string", function() {
//         assert.throws(function() {
//             calculator.multiplication(2, "test" as any);
//         }, "Can not multiplicate with string");
//     });

//     it("9 - Check the division by an empty string", function() {
//         assert.throws(function() {
//             calculator.division(2, "" as any);
//         }, "Error");
//     });
    
//     it("10 - Check the addition of the empty string with empty", function() {
//         assert.throws(function() {
//             calculator.sum("" as any,"" as any);
//         }, "Error");
//     });
// });



