// Exercise 1: Function Expression
/**
 * Exercise 1: Function Expression
 * Create a function expression named add that takes two numbers as parameters and returns their sum. Call the function to add the 2 numbers, then log the result.
 *
 */

let add = function (num1, num2) {
  return num1 + num2;
};

console.log(add(2, 3));

/**
 * Exercise 2: Find Max
 * Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array. Call the findMax function with your array of numbers and log the result to the console.
 */

function findMax(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      maxNumber = numbers[i];
    } else if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

console.log(findMax([2, 10, 3, 7, 20, 1]));

/**
 * Exercise 3: Higher-Order Function
 * Create a higher-order function called mathOperation that takes two numbers and a callback function as parameters. The callback function should perform a mathematical operation. Use this higher-order function to add, subtract, multiply, and divide two numbers.
 */

function mathOperation(num1, num2, operation) {
  if (operation === divide) {
    if (num2 === 0) {
      return "Error: Cannot divide by zero";
    } else {
      return operation(num1, num2);
    }
  } else {
    return operation(num1, num2);
  }
}

let addResult = mathOperation(5, 5, add2);
let substractResult = mathOperation(5, 5, substract);
let multiplyResult = mathOperation(5, 5, multiply);
let divideResult = mathOperation(5, 5, divide);
let divideResult2 = mathOperation(5, 0, divide);

console.log("Add result:", addResult);
console.log("Substract result:", substractResult);
console.log("Multiply result:", multiplyResult);
console.log("Divide result:", divideResult);
console.log("Divide by zero result:", divideResult2);

function add2(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

/**
 * Exercise 4: Function as a Parameter
 * Write a function called applyFunction that takes a function and an array as parameters. It should apply the given function to each element of the array and return a new array with the results.
 */
function applyFunction(operation, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = operation(numbers[i]);
  }
}

let addOne = (number) => {
  return number + 1;
};

let addTwo = (number) => {
  return number + 2;
};

let numbers = [2, 3, 4];
console.log("Before Add:", numbers);

applyFunction(addOne, numbers);
console.log("Add 1:", numbers);

applyFunction(addTwo, numbers);
console.log("Add 2:", numbers);

/**
 * Exercise 5: Callback Functions
 * Create a function getUserData that simulates fetching user data from a server. It should accpet a callback function as a parameter. Call the callback function with a user object once the data is retrieved.
 */

function getUserData(callback) {
  const dataFetched = true;
  if (dataFetched) {
    callback("Data fetched");
  }
}

let printMsg = (message) => console.log(message);

getUserData(printMsg);
