function Car (make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;

  this.previousOwners = [];
  this.owner = 'manufacturer';
  this.running = false;

  if (passengers === undefined) {
    this.passengers = [];
  } else {
    this.passengers = passengers;
  }
}

Car.prototype.sell = function (newOwner) {
  this.previousOwners.push(this.owner);
  this.owner = newOwner;
};
Car.prototype.paint = function (newColor) {
  this.color = newColor;
};
// phase 2
Car.prototype.start = function () {
  this.running = true;
};
Car.prototype.off = function () {
  this.running = false;
};
Car.prototype.driveTo = function (destination) {
  if (this.running) {
    console.log('driving to ' + destination);
    return true;
  } else {
    return false;
  }
};
Car.prototype.park = function () {
  if (this.running === false) {
    console.log('parked!!');
    return true;
  } else {
    return false;
  }
};
Car.prototype.pickUp = function (name) {
  if (this.running && this.passengers.length < this.seats - 1) { // driver counts as 1 but not in passengers array
    this.passengers.push(name);
    return true;
  } else {
    return false;
  }
};
Car.prototype.dropOff = function (name) {
  if (this.passengers.indexOf(name) !== -1 && this.running) {
    this.passengers.splice(this.passengers.indexOf(name), 1);
    console.log('driving to drop off ' + name);
    return true;
  } else {
    return false;
  }
};
Car.prototype.passengerCount = function () {
  return this.passengers.length;
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
