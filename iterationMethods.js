const numbers = [10, 13, 20, 25, 38, 35, 40];
//task 1
let greaterThanOrEqual = [];
greaterThanOrEqual = numbers.filter(function (num) {
  return num >= 25;
});
console.log(greaterThanOrEqual);

let multiplesOfFive = [];

multiplesOfFive = numbers.filter(function (num) {
  return num % 5 === 0;
});
console.log(multiplesOfFive);

//task 2

let squares = [];
squares = numbers.map(function (number) {
  return number ** 2;
});
console.log(squares);

let multipliedByTwo = [];
multipliedByTwo = numbers.map(function (number) {
  return number * 2;
});
console.log(multipliedByTwo);

//task 3

let greaterThanOrEqualTwentyAndSquaresNum = [];

greaterThanOrEqualTwentyAndSquaresNum = numbers
  .filter(function (number2) {
    return number2 >= 20;
  })
  .map(function (number3) {
    return number3 ** 2;
  });
console.log(greaterThanOrEqualTwentyAndSquaresNum);

let divisibleByFiveAndMultiplyOfThree = [];
divisibleByFiveAndMultiplyOfThree = numbers
  .filter(function (number4) {
    return number4 % 5 === 0;
  })
  .map(function (number4) {
    return number4 * 3;
  });
console.log(divisibleByFiveAndMultiplyOfThree);
