//this includes the vehicle class as a module
//const VehicleModule = require('./vehicle').Vehicle

class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.passenger = 0;
        this.speed = 0;
        this.started = false;
        this.numberOfWheels = 0;
        this.fuel = 0;
    }
}
//create a subclass called 'Car' that inherits from the 'Vehicle' class 
class Car extends Vehicle {
    constructor(make, model, year, color, mileage) { //constructor
        super(make, model, year, color, mileage);//call the parent class constructor
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

//method loadPassenger()
loadPassenger(num) {
    if (num + this.passengers <=this.maxPassengers) {
            console.log(`${this.make} ${this.model}` + " have enough space to take all passengers.");
        }
     else {
        console.log(`${this.make} ${this.model}` + " is full.not have enough space to take all passengers.");
    }
}

//method start()
start() {
    if (this.fuel > 0) {            
        console.log("Engine has started.");
        return this.started = true;
    } else {
        console.log("Out of fual");
        return this.started = false;
    }
}

//method scheduleServices()
scheduleServices() {
    if (this.mileage > 30000) {            
        console.log(`Mileage: ${this.mileage} `+ " ,Car need to be serviced");
        this.scheduleService = true;
    }
    else{
        console.log(`Mileage: ${this.mileage} `+ ", No need to service");
        this.scheduleService = false;
    }                     
    }

//method displayDetails()
displayDetails() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
        console.log(`Mileage: ${this.mileage}`);
        console.log(`Maximum passengers: ${this.maxPassengers}`);
        console.log(`Maximum speed: ${this.maximumSpeed}`);
        console.log(`No of wheels: ${this.numberOfWheels}`);
        console.log(`Fuel consumption: ${this.fuel}`);
      }
}

//creating a new objects/Instances 

//object 1
const myCar = new Car("Mercury", "Sedan", "2021", "red", "40000");
myCar.start();
myCar.loadPassenger(7);
myCar.scheduleServices();
console.log("Car Details:");
myCar.displayDetails();
console.log("----------------------------------------------------");

//object 2
const myCar1 = new Car("Honda", "Accord", "2022", "Black", "25000");
myCar1.start();
myCar1.loadPassenger(4);
myCar1.scheduleServices();
console.log("Car Details:");
myCar1.displayDetails();







