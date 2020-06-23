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
