//1. Strings
/*
- These represent textural data.
*/
let doctorName = "Hamza";

console.log(doctorName)

//1.1 Working with Strings (Escape )
console.log("Yagamba nti, 'hi there...'  ")

console.log("Yagamba nti, \" hi there...\"") // outside, inside

console.log('Yagamba nti, \' hi there...\'')

console.log('Yagamba nti, " hi there..."')

let num1 = "5"

console.log(typeof(num1)) // ot console.log(typeof num1)

// 2. Numbers
/* An integere or a floating point number
  Examples e.g. 1,100, 2.3. 3.14, 2e - 5.
*/

//3. Undefined
/* A data type whose variable is not initialised
   E.g.
*/
let studentName; // no defined value
let firstName = undefined; // value is undefined
console.log(studentName)
console.log(firstName)

//4. Null 
/*
 It denotes a null value 
 */

 let age = null;

 console.log(typeof(age))


// 5. Boolean 
//  This is any of two values that's true or false i.e. true/ false 
// E.g.

let num3 = 5;
let num4 = 5;
let num5 = 2;
let num6 = 2;

console.log(num3 == num4)
console.log(num3 == num6)
console.log(num6 > num3)

//6. Big Int
// This is an integer with abitruary length
// E.g 1,0000,000,000,000,000,000

//7. Symbol
// A datatype whose instances are unique and imutable

let value = Symbol("How are you")

//8. Object
// Key - value pairs of a collection of data.
//E.g.

let studentInitials= {firstName: "Edwin", lastName: "Mugarura"};// firstName is key, value is Edwin

// Lirerals 
//not a data type
//E.g.

"How are you" //String literal

1.2 // Numeric literal

true // Boolean literal

// {a:1, b:2, c:3} -  Object literal

[1,2,3,4,5] // Array Literal

undefined // Undefined literal