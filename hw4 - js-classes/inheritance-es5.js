function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}

const newCar = new Car ('Lamborghini', 'Aventador Roadster', 2015, 'Yellow & Black', 350);

Car.prototype.getFullName = function() {
    return this.name + ' ' + this.model;
}

Car.prototype.getAge = function() {
    return 'The car age: ' + (2020 - this.year);
}

Car.prototype.changeColor = function(color) {
    if (this.color === color) {
        return 'It is the same color: ' + this.color;
    }
    else {
        return 'The color was changed: ' + (this.color = color);
    }
}

Car.prototype.calculateWay = function(kilometers, fuel) {
    if (fuel < 10) {
        console.log('You should refuel the car.');
    }

    let speed = this.maxSpeed / 2;
    let time = Math.ceil(kilometers / speed * 60);
    let needFuel = kilometers / this.fuelConsumption - fuel;
    let timesToRefuel = Math.ceil(needFuel / this.fuelCapacity);

    console.log(`You need ${time} minutes at the speed ${speed} to reach the destination.`);

    if (needFuel <= 0) {
        return `You have enough fuel to reach the destination: ${fuel} liter(s).`;
    }
    else {
        return `You need ${needFuel} liter(s) of the fuel to reach the destination. This implies ${timesToRefuel} time(s) of refuel.`;
    }
}

function BMW(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, sunroof = true) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.sunroof = sunroof;
}

BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = BMW;

const newBMWCar = new BMW ('BMW', 'X7', 2019, 'Black', 245);

BMW.prototype.changeModel = function(newModelName) {
    if (this.model === newModelName) {
        return 'It is the same model: ' + this.model;
    }
    else {
        return 'The model was changed: ' +  (this.model = newModelName);
    }
}

function Lexus(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10,climateControl = true) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.climateControl = climateControl;
}

Lexus.prototype = Object.create(Car.prototype);
Lexus.prototype.constructor = Lexus;

const newLexusCar = new Lexus ('Lexus', 'RX F-SPORT', 2016, 'White', 200);

Lexus.prototype.changeYear = function(year) {
    if (this.year === year) {
        return 'It is the same year: ' + this.year;
    }
    else {
        return 'The year was changed: ' + (this.year = year);
    }
}

function Ferrari(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, sideSlipControl = true, password) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.sideSlipControl = sideSlipControl;
    this.ownerPassword = password;
}

Ferrari.prototype = Object.create(Car.prototype);
Ferrari.prototype.constructor = Ferrari;

const newFerrariCar = new Ferrari ('Ferrari', 'F8 Spider', 2019, 'Yellow', 340, 60, 10, true, 12345);

Ferrari.prototype.remoteControl = function(password, engine = "ON") {
    setTimeout(() => console.log('Processing...'), 5);
    if (this.ownerPassword === password) {
        setTimeout(() => console.log('Your car is unlocked.'), 1000);
        if (engine === "ON") {
            setTimeout(() => console.log('The engine is on.'), 2000);
        }
    }
    else {
        setTimeout(() => console.log('The password is wrong.'), 1000);
    }
}
