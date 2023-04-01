const calculate = (initialNumber) => {
  let currentResult = initialNumber;

  const add = (num) => {
    currentResult += num;
    return currentResult;
  };

  const subtract = (num) => {
    currentResult -= num;
    return currentResult;
  };

  const multiply = (num) => {
    currentResult *= num;
    return currentResult;
  };

  const divide = (num) => {
    currentResult /= num;
    return currentResult;
  };

  const reset = () => {
    currentResult = initialNumber;
    return currentResult;
  };

  return { add, subtract, multiply, divide, reset };
};
const calculator = calculate(5);
console.log(calculator.add(5));
console.log(calculator.subtract(2));
console.log(calculator.multiply(3));
console.log(calculator.divide(4));
console.log(calculator.reset());
/////////////////////////////////////////////////////////
const cacheDecorator = (func) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("Returning result from cache for key:", key);
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;
    console.log("Caching result for key:", key);

    return result;
  };
};
const sum = (num) => {
  return num + num;
};

const decoratedSum = cacheDecorator(sum);
console.log(decoratedSum(2));
console.log(decoratedSum(2));

const obj = {
  num: 1,
  result: null,
  sum(num) {
    return this.num + num;
  },
};

const decoratedObjSum = cacheDecorator(obj.sum.bind(obj));
console.log(decoratedObjSum(3));
console.log(decoratedObjSum(3));
////////////////////////////////////////////////////////
const factorial = (initialNumber) => {
  if (initialNumber === 0) {
    return 1;
  } else {
    return initialNumber * factorial(initialNumber - 1);
  }
};

console.log(factorial(5));