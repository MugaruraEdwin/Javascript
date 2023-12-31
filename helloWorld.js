console.log("Hello World")

// 1. Comments
// used to provide information about the code 
// can be used in general to provide any information or suggestions
// makes it easy to understand the code or get more information about the code
// can also be used to comment out code sections
// ignored by javascript engine
// can be single lined or multilined 
// examples 
// This is a single line comment
/*
This is a multiline comment
*/

// 2. Variables
/*
Used to store data
can be looked at as containers for storing data values
must contain only letters, digits, or $ and _ symbol.
*/
// 2.1 Guidelines for Naming Variables
/*
Must beigin with a letter/ underscore
Must not start with a number
Must not be  a reserved key word like if, else, boolean, let, var, const etc.
Variables are case sensitive
Use meaningful names
Use camelCase notation (begin with lowercase then uppercase )
// var was used in earlier versions but now we use let and const
*/
// 2.2 Examples
//Variable declaration

let age;

// Variable initialization

age = 23;

//  = this is called an assignment operator

// Otherway
let studentName = "Pamela";
console.log(studentName);

// Declaring many variables on the same line

let firstName, lastName, cohort, year;
firstName = "John";
lastName = "Doe";
cohort = 4;
year = 2023;
firstName = "Abas";

console.log(firstName)

//3. Dealing with constants

const carName = "Volkswagen";
console.log(carName)

//4.  Naming conventions

//4.1 camelCase style e.g. camelCase
//4.2 PascalCase e.g. PascalCase
//4.3 snake_case e.g. snake_case
//4.4 ALL_CAPS_SNAKE_CASE e.g. ALL_CAPS_SNAKE_CASE
//4.5 kebab-case e.g. kebab-case

//Con
let thirdName = "Janet";

console.log("Your third name is " +thirdName)


//Variable scopes

let num1 = 5;
let num2 = 3;
if (num1 > num2 ) {
    console.log("Num 1 is greater ")
}else{
    console.log("Num 1 is less ")
}