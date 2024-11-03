const numbers = [10, 13, 20, 25, 38, 35, 40];
//task 1
let greaterThanOrEqual = [];
greaterThanOrEqual = numbers.filter(function (num) {
  return num >= 25;
});

let multiplesOfFive = [];

multiplesOfFive = numbers.filter(function (num) {
  return num % 5 === 0;
});

//task 2

let squares = [];
squares = numbers.map(function (number) {
  return number ** 2;
});

let multipliedByTwo = [];
multipliedByTwo = numbers.map(function (number) {
  return number * 2;
});

//task 3

let greaterThanOrEqualTwentyAndSquaresNum = [];

greaterThanOrEqualTwentyAndSquaresNum = numbers
  .filter(function (number2) {
    return number2 >= 20;
  })
  .map(function (number3) {
    return number3 ** 2;
  });

let divisibleByFiveAndMultiplyOfThree = [];
divisibleByFiveAndMultiplyOfThree = numbers
  .filter(function (number4) {
    return number4 % 5 === 0;
  })
  .map(function (number4) {
    return number4 * 3;
  });
console.log(divisibleByFiveAndMultiplyOfThree);
