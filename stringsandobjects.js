// Strings
// Converting a string to uppercase or lowercase 
// Removing Specified characters
// Determining the length or the number of characters of a string
// Checking the alphabetical ordering of string values
// Removing leading or trailing white space from values
// Extract the first or n characters from a string

// 1. Declaration

let myName = "Mugarura Edwin";

// 2. Escape sequences

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

// Deleting properties of an object

// Delete removes the key value pair from the object and returns true
// Unless it cannot delete the property i.e. if the property isn't configurable 

console.log(delete teamDetails.capacity)
console.log(teamDetails)

console.log(delete teamDetails["color"])
console.log(teamDetails)

teamDetails.color="red";
console.log(teamDetails)

teamDetails.capacity=37000;
console.log(teamDetails)

// Object immutability 
//You cannot chnage assignment to a constant variable
// const declaration prohibits changing what thing the constant points to, but it doesn't prohibit changing the content of that thing.
// Thus we can change a property in a constant object but we can't change which object the constant points to.

const myShow = {firstName: "wild", lastName: "flower"}


myShow.firstName="non-wild";
console.log(myShow)

myShow.color ="purple";
myShow.startDate = "1999";

console.log(myShow)

console.log(delete myShow.firstName) 

console.log(myShow)

myShow.firstName="Wild";
console.log(myShow)

// this doesn't work as constant can't be reassigned properties
// myShow = {age:19, collapse:2023} 
// console.log(myShow)

// Object Freeze
// How to stop a constant object from being changed
// The oject.freeze method is used to freeze an oject.

// Freezing an object doesn't allow new properties to be added to the object and prevents removing or altering the existing properteis.
// object.freeze preserves the enumerability, configurability, writability and prototype of the object.

const myNewShow = Object.freeze({year:2000, age:23, firstName: "Edwin", lastName:"Mugarura", color:"red"})


// This won't work as it has been frozen
// console.log(myNewShow)

// myNewShow.length = "2hours";

console.log(myNewShow)

// Chnaging the values of the properties also doesn't work
// myNewShow.year = 1999;
// myNewShow.age = 19;
// console.log(myNewShow)


// Assignment
// Create 2 string variables 

let text1 = "Hey";
let text2 = " Wassup";

// Create 2 number variables

let price1 = 1000;
let price = 2000;

// use concatenation of a string 

let wholeText = text1 + text2;
console.log(wholeText)
// use escape characters

let message1 = 'Hello my bro, "You good?"';
let message2 = "Hello my bro, 'You good?'"; 
let message3 = "Hello my bro, \"You good? \" ";
let message4 = 'Hello my bro, \'You good?\'';

console.log(message1)
console.log(message2)
console.log(message3)
console.log(message4)


// create 3 objects with two properties each, one should be a constant object and another a constant frozen object , another just an object

let footTeam1 = {name: "Arsenal", color:"red"}
const footTeam2 = {name: "ManchesterCity", color:"light-blue"}
const footTeam3 = Object.freeze({name: "ManchesterUtd", color:"red"})

console.log(footTeam1)
console.log(footTeam2)
console.log(footTeam3)


// add two properties to each of these objects

footTeam1.year="2000";
footTeam1.age="100";
console.log(footTeam1)

footTeam2.year="2001";
footTeam2.age="105";
console.log(footTeam2)

footTeam3.year="2002";
footTeam3.age="110";
console.log(footTeam3)


// delete 1 property from each of them

console.log(delete footTeam1.color)
console.log(footTeam1)

console.log(delete footTeam2.color)
console.log(footTeam2)

console.log(delete footTeam3.color)
console.log(footTeam3)

