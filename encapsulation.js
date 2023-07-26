// Encapsulation
// This is a mechanism of restricting direct access to some of the objects components
// A mechansim of bundling data with methods that operate on that data.

// There are two ways of encapsulation in javascript

//1. Making data members private using var / let key words.

//2. Set the data using setter methids and get that data using getter methods.

//We can manage read and write access of objects properties by using encapsulation.

// Read Only Access
// If we declare getter methods only, then it facilitates the read only access.

// Write only Access
// If declare setter methids only, then it facilitates the write only access.

// Read and Write Access
// If we declare both getter and setter methods then it facilitates bith read and write access.

// Why Encapsulation?

//1. Security - controlled access - guards an object against illegal access
//2. Hide implemenation and expose behavior - helps to achieve a level without revealing its complex details.
//3. Loose coupling - Modify the implementation anytime.
//4. Make the application more flexible and manageable.
//5. Simplifies the application 

// Examples

//1.

class Worker{
    constructor(){
        // These are encapsulated
        let workName;
        let rating;
        let number;
    }
    // Getter method - only reads
    // methods follow camel casing
    getWorkName(){
        return this.workName;
    }
    // Setter method - writes only
    setWorkName(workName){
        this.workName = workName;
    }
    getRating(){
        return this.rating;
    }
    setRating(rating){
        this.rating = rating;
    }
    getNumber(){
        return this.number;
    }
    setNumber(number){
        this.number = number;
    }
}

let worker1 = new Worker();
worker1.setWorkName("Muzungu");
worker1.setRating(8);
worker1.setNumber(25670986765);

// console.log(worker1); // printing out the whole worker
console.log(worker1.getWorkName(), worker1.getRating(), worker1.getNumber())

// Example 2

class Employee{
    setEmployeeDetails(employeeName,id,phoneNumber){
        this.employeeName=employeeName;
        this.id = id;
        this.phoneNumber = phoneNumber;
    }

    getEmployeeName(){
        return this.employeeName;
    }
    getId(){
        return this.id;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
}

let employee1 = new Employee();
employee1.setEmployeeDetails("Edwin",1,"0706747874");
console.log(employee1.getEmployeeName(), employee1.getId(), employee1.getPhoneNumber());







