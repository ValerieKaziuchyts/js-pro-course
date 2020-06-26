class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    
    getFullName() { return this.name + ' ' + this.model; }

    getAge() { return 'The car age: ' + (2020 - this.year); }

    changeColor(color) {
        if (this.color === color) { return 'It is the same color: ' + this.color; }
        else { return 'The color was changed: ' + (this.color = color); }
    }

    calculateWay(kilometers, fuel) {
        if (fuel < 10) { console.log('You should refuel the car.'); }
    
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
}

const newCar = new Car ('Lamborghini', 'Aventador Roadster', 2015, 'Yellow & Black', 350);

class BMW extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, sunroof = true) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.sunroof = sunroof;
    }

    changeModel(newModelName) {
        if (this.model === newModelName) { return 'It is the same model: ' + this.model; }
        else { return 'The model was changed: ' +  (this.model = newModelName); }
    }
}

const newBMWCar = new BMW ('BMW', 'X7', 2019, 'Black', 245);

class Lexus extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, climateControl = true) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.climateControl = climateControl;
    }

    changeYear(year) {
        if (this.year === year) { return 'It is the same year: ' + this.year; }
        else { return 'The year was changed: ' + (this.year = year); }
    }
}

const newLexusCar = new Lexus ('Lexus', 'RX F-SPORT', 2016, 'White', 200);

class Ferrari extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, sideSlipControl = true, password) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.sideSlipControl = sideSlipControl;
        this.ownerPassword = password;
    }

    remoteControl(password, engine = "ON") {
            setTimeout(() => console.log('Processing...'), 5);
        if (this.ownerPassword === password) {
            setTimeout(() => console.log('Your car is unlocked.'), 1000);
            if (engine === "ON") {
                setTimeout(() => console.log('The engine is on.'), 2000);
            }
        }
        else { setTimeout(() => console.log('The password is wrong.'), 1000); }
    }
}

const newFerrariCar = new Ferrari ('Ferrari', 'F8 Spider', 2019, 'Yellow', 340, 60, 10, true, 12345);
