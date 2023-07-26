// Abstraction

// An abstarcion is a way of hiding the implemenation details and showing only the functionality
// It hides the implemenation details and only shows the essential features of thje object
// This approach improves understandability as well as maintainability of the code.

// Foe example

// Because of abstarction you won't the details of how many proccesses are involved to make a car start after igniting it.
// Basically its hide details and show essentials

// Example

//1.

// No abstraction implemented


function Employee(employeeName,age,baseSalary){
    this.employeeName=employeeName;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 100000;

    //methods
    // these method are exposed as a property  since they are defined with this key word
    this.calculateFinalSalary = function(){
        let finalSalary = this.baseSalary + this.monthlyBonus;
        console.log("Final salary is: ", finalSalary);
    }

    // Exposed methods

    this.getEmployeeDetails = function(){
        console.log("Name:",this.employeeName,"Age:",this.age)
    }
}

let employee1 = new Employee("Edwin","23",1200000);

employee1.getEmployeeDetails();// Accessed here since they are exposed
employee1.calculateFinalSalary();

//2. 
// Abstraction implemented
// Where the methods are not exposed

function Employee1(empName,age,baseSalary){
    this.empName=empName;
    this.age = age;
    this.baseSalary = baseSalary;
    //Private variable or hidden variable (using let)
    let monthlyBonus = 100000;

    //methods
    // these method is not exposed/ hidden  since they are defined with  let key word
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log("Final salary is: ", finalSalary);
    }
    let calculateEmployeeService = function(){
        let startYear = 1990;
        let yearNow = 2023;
        let yearsWorked = yearNow - startYear;

        if(yearsWorked > 30){
            console.log("This employee retired")
        }else if(yearsWorked === 30){
            console.log("This employee is due retirement")
        }else{
            console.log("This employee is stilll in service")
        }
    }
    // Exposed methods

    this.getEmployeeDetails = function(){
        console.log("Name:",this.empName,"Age:",this.age)
        calculateFinalSalary();
        calculateEmployeeService();
    }

}

let employee2 = new Employee1("Edwin","23",1200000);

employee2.getEmployeeDetails();// Accessed here since they are exposed
// employee2.calculateFinalSalary();// This won't work due to obstraction
// employee2.calculateEmployeeService();// This won't work due to obstraction

// Abstraction only enables access through anotehr function