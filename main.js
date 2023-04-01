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