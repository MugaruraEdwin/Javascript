// Class
// A class is a blueprint of an object.

// N.B: A class will always have its name in singular
// Class names always begin with capital letters

// THIS 
// this key word refers to the object of the class


// Syntax of a class

// class Class_name{
//     statements
// }

// Examples

class Employee{
    // A class always has a constructor which is called whenever a class is instantiated or an object of the class in created
    // Helps us also define the parameters that are going to be used
    constructor(name,id,gender,color,education){
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.color = color;
        this.education = education;
    }
}

// Object(s):This is an instance of a class

// Creating objects of employee class

let Emp1 = new Employee("Mugarura Edwin","19/U/13324","male","black","Bachelor's degree");

let Emp2 = new Employee("Allen Mutesi","19/U/12034","female","black","Advanced Level");

console.log(Emp1);
console.log(Emp2);

//Printing only employee names
console.log(Emp1.name);
console.log(Emp2.name);

console.log(Emp1["gender"]);
console.log(Emp2["gender"]);

class Car{

    constructor(name,manufacturer,type,speed,color){
        this.name = name;
        this.manufacturer= manufacturer;
        this.type = type;
        this.speed = speed;
        this.color = color;
    }
}

let car1 = new Car("Benz","Mercedez","luxurious","360kmhr","black");
let car2 = new Car("land-cruiser","Toyota","luxurious","240kmhr","white");

console.log(car1);
console.log(car2);



