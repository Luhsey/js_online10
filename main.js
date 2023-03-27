
19 HW

function getDaysInYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
  } else {
    return 365;
  }
}
console.log(getDaysInYear(2021)); 
console.log(getDaysInYear(2020));
//////////////////////////////////////////////////
function getDayNumber(dateString) {
  const date = new Date(dateString);
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.ceil(diff / oneDay);
}
console.log(getDayNumber("2023-01-12"));
console.log(getDayNumber("2023-02-26"));
/////////////////////////////////////////////////
function getQuarters(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  if (month >= 1 && month <= 3) {
    return "I quarter";
  } else if (month >= 4 && month <= 6) {
    return "II quarter";
  } else if (month >= 7 && month <= 9) {
    return "III quarter";
  } else {
    return "IV quarter";
  }
}
console.log(getQuarters("2023-02-26"));
/////////////////////////////////////////////////
function calcDateDiff(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = end - start;
  if (diff < 60 * 1000) {
    return `${Math.floor(diff / 1000)} seconds`;
  } else if (diff < 60 * 60 * 1000) {
    const minutes = Math.floor(diff / (60 * 1000));
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  } else if (diff < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours} ${hours === 1 ? "hour" : "hours"} ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  } else if (diff < 30 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    return `${days} ${days === 1 ? "day" : "days"}`;
  } else if (diff < 365 * 24 * 60 * 60 * 1000) {
    const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
    return `${months} ${months === 1 ? "month" : "months"}`;
  } else {
    const years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
    return `${years} ${years === 1 ? "year" : "years"}`;
  }
}
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"));
console.log(calcDateDiff("2023-02-26 14"))
/////////////////////////////////////////////////////
function createMap(arr) {
  const map = new Map();
  arr.forEach(obj => {
    map.set(obj.id, obj);
  });
  return map;
}
const arr = [
  { id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
];
const map = createMap(arr);
console.log(map.get(1));
console.log(map.get(2));
console.log(map.get(3)); 
////////////////////////////////////////////////////
function cacheCalcDateDiff() {
  const cache = new Map();
  return function(startDate, endDate) {
    const key = `${startDate}_${endDate}`;
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const diff = calcDateDiff(startDate, endDate);
      cache.set(key, diff);
      return diff;
    }
  }
}
const cachedCalcDateDiff = cacheCalcDateDiff();
const result1 = cachedCalcDateDiff("2023-02-26 14:00", "2023-02-26 14:20");
const result2 = cachedCalcDateDiff("2023-02-26 14:00", "2023-02-26 14:20");
const result3 = cachedCalcDateDiff("2023-02-26 14:00", "2023-02-27 15:30");
const result4 = cachedCalcDateDiff("2023-02-26 14:00", "2023-02-27 15:30");
///////////////////////////////////////////////////////
HW 20




const unique = (arr) => {
  const map = new Map();
  for (const word of arr) {
    const sorted = word.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, word);
    }
  }
  return Array.from(map.values());
};
const anagrams = [
  "actor",
  "carot",
  "listen",
  "enlist",
  "debit",
  "bidet",
  "tear",
  "rate",
  "night",
  "thing",
  "lives",
  "veils",
  "stressed",
  "desserts",
  "dormitory",
  "dirty room",
  "rescue",
  "secure",
  "a gentleman",
  "elegant man",
  "listen",
  "heart",
  "angel",
  "leader",
];
console.log(unique(anagrams));
//////////////////////////////////////
const user = {
  firstName: "",
  lastName: "",
  age: "",
  get userInfo() {
    return `${this.firstName} ${this.lastName} is ${this.age}`;
  },
  set userInfo(info) {
    if (typeof info === "string") {
      const [firstName, lastName, age] = info.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    } else if (typeof info === "object") {
      const { firstName, lastName, age } = info;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  },
};
user.userInfo = "Taras Samoilenko 25";
console.log(user.userInfo);
user.userInfo = { firstName: "Kate", lastName: "Karp", age: 22 };
console.log(user.userInfo); 
/////////////////////////////////////////////
const obj = {
  from: 1,
  to: 10,
  createArr() {
    this.arr = [];
    for (let i = this.from; i <= this.to; i++) {
      this.arr.push(i);
    }
    return this.arr;
  },
};
obj.createArr();
console.log(obj.arr);
///////////////////////////////////////////////
function Car(model, color, age, speed, gasTank, started) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.gasTank = gasTank;
  this.started = started;

  this.startEngine = function() {
    if (this.gasTank > 0) {
      this.started = true;
    }
    return this;
  };

  this.drive = function() {
    if (this.started && this.gasTank > 0) {
      this.speed = 30;
    }
    return this;
  };

  this.stop = function() {
    this.started = false;
    this.speed = 0;
    return this;
  };

  this.speedUp = function(amount) {
    if (this.started && this.gasTank > 0) {
      this.speed += amount;
      if (this.speed > 200) {
        this.speed = 200;
      }
      this.gasTank -= 5;
      if (this.gasTank < 0) {
        this.gasTank = 0;
        this.stop();
      }
    }
    return this;
  };

  this.slowDown = function(amount) {
    if (this.started && this.gasTank > 0) {
      this.speed -= amount;
      if (this.speed < 0) {
        this.speed = 0;
      }
      this.gasTank -= 5;
      if (this.gasTank < 0) {
        this.gasTank = 0;
        this.stop();
      }
    }
    return this;
  };

  this.addGas = function(amount) {
    this.gasTank += amount;
    if (this.gasTank > 20) {
      this.gasTank = 20;
    }
    return this;
  };

}
const car = new Car('Toyota', 'red', 5, 0, 10, false);
////////////////////////////////////////

HW 21




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
//////////////////////////////////////////////
HW 22






const university = {
  universityName: "Polytechnic",
  dean: "John Smith",
};

const faculty = Object.create(university, {
  facultyName: {
    value: "Computer Science",
  },
  groups: {
    value: [[]],
  },
  enlistStudent: {
    value: function(name) {
      const groups = this.groups;
      let lastGroup = groups[groups.length - 1];
      if (lastGroup.length >= 12) {
        lastGroup = [];
        groups.push(lastGroup);
      }
      lastGroup.push(name);
    },
  },
});

console.log(faculty.universityName);
faculty.enlistStudent("Taras");
console.log(faculty.groups);
////////////////////////////////////////////////
class Shape {
  constructor(color) {
    this.color = color;
  }

  getArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
const shape = new Shape('red');
console.log(shape.color);
console.log(shape.getArea());

const rectangle = new Rectangle('green', 5, 10);
console.log(rectangle.color);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

const circle = new Circle('blue', 3);
console.log(circle.color);
console.log(circle.radius);
console.log(circle.getArea());
///////////////////////////////////////////////////////
const fibonacci = (n) => {
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return a;
};
console.log(fibonacci(7));
////////////////////////////////////////////////////
const cacheDecorator = (func) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
};
const fibonacci = (n, cache = {}) => {
  if (n < 2) {
    return n;
  }
  const key = JSON.stringify(n);
  if (cache[key]) {
    return cache[key];
  }
  const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  cache[key] = result;
  return result;
};
const decoratedFib = cacheDecorator(fibonacci);
decoratedFib(7);
/////////////////////////////////////////////////////////
HW 23






class Vehicle {
  constructor(power, gasTank, mass) {
    this.power = power;
    this.gasTank = gasTank;
    this.mass = mass;
    this.started = false;
  }

  getMaxSpeed() {
    return Math.round(0.84 * this.power / this.mass);
  }

  getGasUsage() {
    return Math.round(this.getMaxSpeed() / this.power * 100);
  }

  startEngine() {
    this.started = true;
  }

  stopEngine() {
    this.started = false;
  }

  drive(speed, distance) {
    if (!this.started) {
      console.log("Engine is not started.");
      return;
    }

    const maxSpeed = this.getMaxSpeed();
    if (speed > maxSpeed) {
      console.log(`Cannot drive faster than ${maxSpeed} km/h.`);
      return;
    }
    if (speed < 0) {
      console.log(`Speed cannot be negative.`);
      return;
    }

    const gasUsage = this.getGasUsage();
    const gasLevel = distance * gasUsage / 100;
    if (gasLevel > this.gasTank) {
      console.log(`Not enough gas. Maximum distance you can drive is ${this.gasTank / gasUsage} km.`);
      return;
    }

    this.gasTank -= gasLevel;
    console.log(`Successfully drove ${distance} km.`);
  }

  addGas(amount) {
    if (amount <= 0) {
      console.log("Amount must be bigger than zero.");
      return;
    }
    if (this.gasTank + amount > this.constructor.maxGasTank) {
      console.log(`Cannot pour more than ${this.constructor.maxGasTank} liters of gas.`);
      return;
    }

    this.gasTank += amount;
    console.log(`Successfully added ${amount} liters of gas.`);
  }

  printInfo() {
    console.log(`Type: ${this.constructor.name}`);
    console.log(`Power: ${this.power} kW`);
    console.log(`Gas tank: ${this.gasTank} liters`);
    console.log(`Mass: ${this.mass} tonnes`);
    console.log(`Max speed: ${this.getMaxSpeed()} km/h`);
    console.log(`Gas usage per km: ${this.getGasUsage()} liters`);
    console.log(`Started: ${this.started}`);
    console.log(`Current gas level: ${this.gasTank} liters`);
  }
}

class Car extends Vehicle {
  constructor(power, gasTank, mass, type, maxPassengerCount) {
    super(power, gasTank, mass);
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
    this.passengerCount = 0;
  }

  printInfo() {
    super.printInfo();
    console.log(`Type: ${this.type}`);
    console.log(`Max passenger count: ${this.maxPassengerCount}`);
    console.log(`Passenger count: ${this.passengerCount}`);
  }
}

class Bus extends Car {
  constructor(power, gasTank, mass, type, maxPassengerCount) {
    super(power, gasTank, mass, type, maxPassengerCount);
  }

  updatePassengers(passengers) {
    if (passengers > this.maxPassengerCount) {
      console.log(`Cannot have more than ${this.maxPassengerCount} passengers.`);
      return;
    }
    if (passengers < 0) {
      console.log(`Passenger count cannot be negative.`);
      return;
    }

    this.passengerCount = passengers;
    console.log(`Updated passenger count to ${passengers}.`);
  }

  printInfo() {
    super.printInfo();