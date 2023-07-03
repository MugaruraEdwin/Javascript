// A funstion is a reusable blcok of code

// Syntax of a function

function function_name(){
    //function body/ statements
}

// Example of a  Non- parameterized function

// 1. 

function add(){
    console.log(2 + 3)
}
add(); // Function invocation 

// Parameterized function

// 1.

function subtract(a,b){
    console.log(a-b)
}
subtract(10,3);

// The return key word -doesn't output but can also be reused, can also be output within the calling.


function multiply(c,d,e){
    return (c * d * e);
   
}
console.log(multiply(10,10,20))


// Example with a bundles varaible 
// Can test multiple values 

function modulus(f,g){
    let modulo = f % g;
    return modulo;
}
modulus();
console.log(modulus(10,2));
console.log(modulus(30,16));
// console.log(modulus(30));// the second aargumenet is msissing the engine fills it as undefined. So 
// 30 + undefined = NaN ( Not a number )

function greeting(){
    console.log("Hey, there !")
}
greeting();

//OR

function outside(){
    let greet = "Hello";
   return greet;
}
outside();
console.log(outside());

// Scopr of Variables 
// Local or Global variables

// A local variable has a limited scope( can be accessed only inside a function only where it's defined)

// A global variable has a global scope ( it is declared outside any function  and can be accessed by any function) 

// Examples of local variables

function divide(){
    let localVariable1 = 10;
    let localVariable2 = 2;

    let result = localVariable1 / localVariable2;
    return result;
}

console.log(divide());

// function addition() {
//     let result2 = localVariable1 + localVariable2;
//     return result2;
// }
// console.log(addition()); // can't work because of using local variables

// Examples of global variables

let globalVariable1 = 10;
let globalVariable2 = 20;

function multiplication(){
    let result2 = globalVariable1 * globalVariable2;
    return result2;
}
console.log(multiplication());

// function multiplication(){
//     let result2 = globalVariable1 * globalVariable2;
//     return result2;
// }
// console.log(multiplication());

function divison(){
    let result2 = globalVariable1 / globalVariable2;
    return result2;
}
console.log(divison());

// Fat Arrow Functions ES6

// Examples
// NB: Never use the same function name to avoid redundancy

// can use either let or const

const sum = (a,b) => {
    return a + b;
}
console.log(sum(10,5));

//OR 

// Concise way of writing an arrow function that has one line of code in the body

const sum1 = (a,b) => { return (a + b); }

// If a function has moe than one line of code

const sum2 = (a,b) => {
    let result3= a + b; 
    return `The result is ${result3} per teh calculation`;
}
console.log(sum2(10,10))