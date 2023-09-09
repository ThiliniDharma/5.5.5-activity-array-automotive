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
    aboutVehicle() {
        console.log(`Model ${this.model}`);
        console.log(`Make ${this.make}`);
        console.log(`Color ${this.color}`);
        console.log(`This vehicle is made by ${this.year}`);
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
        console.log(`Mileage: ${this.mileage} `+ " , Car need to be serviced");
        this.scheduleService = true;
    }
    else{
        console.log(`Mileage: ${this.mileage} `+ ", No need to service");
        this.scheduleService = false;
    }                     
    }

//method displayDetailsCar()
displayDetailsCar() {
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

//creating a new car objects/Instances 

//object 1
const myCar = new Car("Mercury", "Sedan", "2021", "red", 40000);
myCar.start();
myCar.loadPassenger(7);
myCar.scheduleServices();
console.log("\n");
console.log(".............");
console.log("Car 1 Details:");
console.log(".............");
myCar.displayDetailsCar();
console.log("----------------------------------------------------");

//object 2
const myCar1 = new Car("Honda", "Accord", "2022", "Black", 25000);
myCar1.start();
myCar1.loadPassenger(4);
myCar1.scheduleServices();
console.log("\n");
console.log(".............");
console.log("Car 2 Details:");
console.log(".............");
myCar1.displayDetailsCar();
console.log("----------------------------------------------------");

//create a subclass called 'Truck' that inherits from the 'Vehicle' class 
class Truck extends Vehicle {
    constructor(make, model, year, color, mileage,type,trailerSize,doors,wheels) {//constructor
    super(make, model, year, color, mileage);//call the parent class constructor
    this.doors = doors;
    this.trailerSize= trailerSize;
    this.type=type;
    this.wheels=wheels;
    }

//method loadCapacity()
loadCapacity()
{
if (this.trailerSize == 53) {
        console.log(`${this.trailerSize}` + " foot trailer can load 30 pallets");
    }
if(this.trailerSize == 48) {
    console.log(`${this.trailerSize}` + " foot trailer can load 24 pallets");
}
if(this.trailerSize == 45) {
    console.log(`${this.trailerSize}` + " foot cubic container can load 24-26 pallets");
}
if(this.trailerSize == 40) {
    console.log(`${this.trailerSize}` + " foot container can load 20 pallets");
}
if(this.trailerSize == 24) {
    console.log(`${this.trailerSize}` + " foot truck can load 12 pallets");
}
if(this.trailerSize ==16) {
    console.log(`${this.trailerSize}` + " foot box truck can load 6 pallets");
}
}

//method displayDetailsTruck()
displayDetailsTruck() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Color: ${this.color}`);
    console.log(`Mileage: ${this.mileage}`);
    console.log(`Type: ${this.type}`);
    console.log(`Trailer Size: ${this.trailerSize}`);
    console.log(`No of doors: ${this.doors}`);
    console.log(`No of wheels: ${this.wheels}`);
  }
}
//creating a new truck objects/Instances 

//object 1
const truck1 = new Truck("Kenworth", "TJ6500", "2020", "white", "18000","Jumbo",45,2,18);
truck1.loadCapacity();
console.log("\n");
console.log("...............");
console.log("Truck Details:");
console.log("...............");
truck1.displayDetailsTruck();
console.log("----------------------------------------------------");