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