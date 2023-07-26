//inheritance
// A process where one class acquires properties ( methiods abd fields) from another class.

// Parent class -- child class 
//Super class -- Sub class
// Base class - derived class

// Parent class 

class Car {
    setName(carName) {
        this.carName  = carName;
    }
    getName(){
        // return this.carName; // can use either return or console.log
        console.log("This car name is ", this.carName)
    }
    startEngine(){
        console.log("Starting Engine for ", this.carName)
    }
    stopEngine(){
        console.log("Stopping Engine for ",this.carName)
    }
}

// Child class 
// start and stop engine work more like getter methods
class Toyota extends Car{

    topSpeed(speed){
        console.log("Top speed for the car ",this.carName, "is", speed )
    }
}

let car1 = new Toyota();

car1.setName("Benz");
car1.getName();
car1.startEngine();
// car1.stopEngine(); - pick only the methods that we want to implement  
car1.topSpeed("75km/hr");



