// Strings
// Converting a string to uppercase or lowercase 
// Removing Specified characters
// Determining the length or the number of characters of a string
// Checking the alphabetical ordering of string values
// Removing leading or trailing white space from values
// Extract the first or n characters from a string

// 1. Declaration

let myName = "Mugarura Edwin";

// 2. Escape sequencea

let escapeSequence = 'Hey, "are you okay my love ?"'

// console.log("Yagamba nti, 'hi there...'  ")

// console.log("Yagamba nti, \" hi there...\"") // outside, inside

// console.log('Yagamba nti, \' hi there...\'')

// console.log('Yagamba nti, " hi there..."')
console.log(escapeSequence)

//3. Concatenation

let firstName = "Edwin";
let lastName = " Mugarura";

let fullName = firstName + lastName;// firstName + " " + lastName - creates a space in between

console.log(fullName)

// String literals

let team1 = "Arsenal";
let team2 = "Chelsea";

// String interpolation

// String interpolation is a handy way to merge javascript expressions with strings

// The basic syntax is 
//` soemthing  ${expression} something `

let age = 23;

console.log(`Edwin is ${age} years old`)

// String Methods
// 1. String length

// The length property returns the length of the string
 
let myString = "qwertyuiopasdfghjklzxcvbnm";
console.log("My string length is" ,myString.length)// , can also be used for spacing a variable

//2. Extracting parts of a string

// .slice(start,end)
// slice extracts a part of a string and returns the extracted part in a new string
// The method takes two parameters i.e.,(start,end)

console.log(myString.slice(7,13))

console.log(myString.substring(5,7))


// datatype inversion

let age1 = 4;
let age2 = "9";

console.log(age1 + age2)

console.log(age1 + Number(age2))

let age3 = 5;
let age4 = 7;

console.log(age3 + age4)

console.log(age3 + String(age4))

//Objects

// Objecst store a collection of keyy value pairs
// Each item in the collection has a name that we call a key and an associated value

let teamDetails = {name: "Penchester United", color: "red", hobbies:["flopping", "failure", "banter"]}

// Accessing properties of an object

//1. Dot Notation

console.log(teamDetails.name)
console.log(teamDetails.hobbies)

// 2. Bracket Notation

console.log(teamDetails["color"])

console.log( "North London is " + teamDetails.color)

//Adding properties to an object

teamDetails.location = "Carrington";
teamDetails["capacity"] = "37000";

console.log(teamDetails)