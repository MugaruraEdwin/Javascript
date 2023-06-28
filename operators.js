// An opertaor is a symbol that usually represents action or process.
// For examples let sum = 10 + 20;
// = this is an assignment operator.
// + this is an arithmetic operator.(addition)

// List of operators 
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// Type operators
// Bitwise operators

// Arithmetic operators

// + addition
// - subtraction
// * multiplication
// /  division 
// % modulus (remainder of division)
// ** exponential
// ++ increment
// -- decrement 

// let z = 6 + 2;
// 6 and 2 are called operands.

// 1. Addition

let x = 5;
let y = 10;

let result1 = x + y;
console.log(result1)

// 2. Subtraction

let result2 = x - y;
console.log(result2) 

// 3.  Multiplication

let result3 = x * y;
console.log(result3)


// 4.   Division 

let result4 = x / y ;
console.log(result4)


// 5.  modulus (remainder of division)

let result5 = x % y;// when x is smaller it returns x
console.log(result5)

// 6. exponential // power

let result6 = x ** y;
console.log(result6)

// 7. Increment 

// Post Increment // increases variables value after an action
let result7 = 2;
let result = 2 + result7++
console.log(result)

console.log(result7)

// Pre-increment // incrases value before action

// let result8 = 2;
// let resultnow = 2 + ++result8;
// console.log(resultnow)

// console.log(result8)

// 8. Decrement 

// Post- Decrement // decreases variables value after an action
let result9 = 2;
let resultnow = 2 + result9--
console.log(resultnow)

console.log(result9)

//Pre - Decrement // decreases variables value before an action
// let result10 = 2;
// let resultnow = 2 + --result10
// console.log(resultnow)

// console.log(result10)

// Incrementing with more than 1

let cityNumber = 10;

cityNumber += 2;// this is the same as cityNumber = cityNumber + 2 

console.log(cityNumber)

// Assignment operators

// 1. = Assign 

//Examples

let phoneNumber = 0706747;

// 2. Add and asign (+=)

//e.g

let carNumber = 435;

carNumber += 5;

console.log(carNumber)

// 3. Subtract and asign (-=)

let fingerNumber = 435;

fingerNumber -= 5;

console.log(fingerNumber)


//4. Multiply and assign (*=)

let toeNumber = 5;

toeNumber *= 5;

console.log(toeNumber)

//5. Divide and assign (/=)

let teethNumber = 32;

teethNumber /= 8;

console.log(teethNumber)

//6. Modulus and assign (%=)


let kneeCapNumber = 32;

kneeCapNumber %= 16;

console.log(kneeCapNumber)

// 7. Exponential and assign (**=)

let capNumber = 2;

capNumber **= 3;

console.log(capNumber)

// Comparison operators 

// let p = 3;
// let q = 5;
// let r = "5";
// let t = 3;

//1. Equal to (==)

// console.log(p == q)
// console.log(q == r)

// 2. === Strict equal ( equal value and equal datatype)

// console.log(q === r)

//3. != Not equal to (! negation)

// console.log(p != t)
// console.log(q != r)

//4 !== Strict not equal (not equal value ans type)

// console.log(q !== r)

//5. > Greater than 

// console.log(p > q)

// Less than <

// console.log(p < q)

// Greater than or equal (>=)

// console.log(q >= r)

// Less than or equal ( <= )

// console.log(p <= q)

// Ternary operator ( condition ? true : false)

/*
Ternary operator is lile if _ then _ else 

It takes 3 arguments 
condition ? value if true : value if false 
*/

let age= 23;

let answer = age > 18 ? "You are allowed at the club" : "Since your under age, your not allowed at the club ";

console.log(answer)

// if(age > 18){

//     console.log("You are allowed at the club")

// }else {

//     console.log("Since your under age, your not allowed at the club ")
    
// }

//6. Logical Operators


let p = true;
let q = true;
let t = false;
let u = false;

//6.1 && Logical AND - returns true if both conditions are true 

// console.log(p && q)
// console.log(p && u)

// console.log((age > 23) && (age >= 23))

// false and false = false
// true and false = false
// true and true = true 
// false and true = false

// 6.2 Logical OR ( || ) - returns true if anu of the conditions is true


// console.log(p || q)
// console.log(p || u)
// console.log(t || u)

// console.log((age > 23) || (age >= 23))

// false and false = false
// true and false = true
// true and true = true 
// false and true = true

// Logical Not ( ! ) - This will return true if the condition is false and viceversa

// console.log(!q)
// console.log(!t)

// 7. Type operators
// In Javascript there are 2 type operators i.e. typeof and instanceof 
// typeof returns the type of the datatype of a variable 
// you can use typeof to find a datatype of a javascript variable

// instanceof returns true if an object is an instance of an object type.
// The instanceof operator returns a boolean value that indicates if an object is an instance of a particular class.

// typeod exanples

let script = "Sing Hallelujah";
let scriptNumber = 1;

console.log(typeof(script))
console.log(typeof(scriptNumber))
console.log(typeof(true))
console.log(typeof(null))
console.log(typeof NaN)
console.log(typeof [1,2,3,4])
console.log(typeof {name:"john", age:23})
console.log(typeof function(){})
console.log(typeof treeNumber)

// instanceof examples

let lastName = new String("Doe");
let number1 = new Number(23);

console.log(lastName instanceof String)
console.log(number1 instanceof Number)

//8. Bitwise operators (Research) Personal

//9. I