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