//Part one
// Create a class for vehicle. Each vehicle instance should have the following properties:

// - make
// - model
// - year

// Each vehicle instance should have access to a method called ***honk***, which returns the string “Beep.”

class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this. model = model;
        this.year = year
    }
    honk (){
        console.log("beep")
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999)

//Part 2
// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
    constructor (make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 4
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

//Part 3 
//Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

class Motorcycle extends Vehicle {
    constructor (make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 2
    }
    revEngine() {
        console.log("VROOM!!")
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// Part 4
//Create a class for a Garage. It should have a property called ***vehicles*** which will store an array of vehicles, and a property called ***capacity*** which is a number indicating how many vehicles will fit in the garage. When you create a garage, ***vehicles*** will always be empty; you only need to provide the ***capacity***.

// A garage should also have an ***add*** method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is *not* a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            throw new Error ("Only vehicles are allowed in here") // had trouble with this line - need more explanation
        }     
        if(this.vehicles.length >= this.capacity){
            throw new Error ('Sorry we are full')
        } 
        this.vehicles.push(newVehicle.make);
        console.log("Vehicle added!");
    }

}

let garage = new Garage(2)


// console.log(myFirstVehicle.honk())
// console.log(myFirstVehicle.toString())
// console.log(myFirstCar.honk())
// console.log(myFirstCar.toString())
// console.log(myFirstCar.numWheels)
// console.log(myFirstMotorcycle.toString())
// console.log(myFirstMotorcycle.honk())
// console.log(myFirstMotorcycle.revEngine())
// console.log(myFirstMotorcycle.numWheels)
console.log(garage.vehicles)
console.log(garage.add(new Car("Hyundai", "Elantra", 2015)))
console.log(garage.vehicles)
// console.log(garage.add("Taco"))
// console.log(garage.vehicles)
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)))
console.log(garage.vehicles)
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)))



