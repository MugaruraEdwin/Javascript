// Arrays
// Store multiple values in a single variable

let numbers = [1,2,3,4,5];

console.log(numbers)

let fruits = ["apples", "mangoes", "grapes", "bananas", "sugarcanes"];

console.log(fruits)

// Constructor array - parentheses brackets used instead of square brackets

let cars = new Array("benz", "posh", "escalade");

console.log(cars)

// Printing out a partcular cxr from array cars

console.log(cars[0])

cars[0] = "BMW";

console.log(cars);

fruits.push("water-melons");

console.log(fruits)

console.log(fruits.length)

// Array Methods

// Pop
//It removes the last element from the array

fruits.pop()

console.log(fruits)

// Shift
// It removes the first element from the array

fruits.shift();

console.log(fruits)

// Unshift
// It adds a new element to the beginning of the array

fruits.unshift("berries");
console.log(fruits)

// Sort: sorts the array alphabetically 
// reverse: reverses the order of the array

// Join Mathod: Joins the elements of an array into a string

let string = fruits.join("");

console.log("_____",string)

// Deleting an item from the array

// This deletes an element at the specified index but doen't delete the index

console.log(cars);
delete cars [0];

console.log(cars);

cars.push("BMW");

console.log(cars)

cars[0] = "premo";

console.log(cars)

// Splice Method

// It removes elements from to the specified indices

cars.splice(1,2);

console.log(cars)

cars.splice(2,0,"escalade","psoh");// adds two elements and removes none

console.log(cars)

// Slice
//Creates a sub array from a bigger array // last value isn't inclusive

let newCars = cars.slice(1,3);
console.log(newCars)

// Concat

let evenNumbers = [0,2,4,6,8,10];
let oddNumbers = [1,3,5,7,9,11];
let primeNumbers = [2,3,5,7,11];


let allNumbers = evenNumbers.concat(oddNumbers, primeNumbers);

console.log(allNumbers)

// Nested Arrays / multi-dimensional arrays

let hobbies = [["swimming", 4, ["chess", 10, ["mass", 10]]],["gaming", 8],["sleeping", 3], ["football", 9]];

console.log(hobbies)

console.log(hobbies[0]);// swimming and chess

console.log(hobbies[1][1]);// 8 from gaming

console.log(hobbies[0][2][0]);// chess specifically

console.log(hobbies[0][2][2][0]) // mass specifically

// Removing an element from a sub-array / multi-dimensional array

hobbies[2].pop() // removes last item from specific array
console.log(hobbies);

// hobbies[3].pop() // removes last item from specific array in this position
// console.log(hobbies);

// hobbies[0].pop()
// console.log(hobbies)

hobbies[3].push("added")

console.log(hobbies)

// deleting from main array

// hobbies.splice(0,1); // means at position 0 remove 1 element
// console.log(hobbies)

// let stars =["1","2","3","4"];

// stars.splice(1,2);

// console.log(stars)


hobbies.splice(1,0,["dancing",3]);// push are to position (1) without deleting anything(0).

console.log(hobbies)


// let stars =["1","2","3","4"];

// stars.splice(2,1,"after");// adds to position 2 but deletes whatever is in that position

// console.log(stars)

// Looping through an array

let myHobbies = [["swimming", 4,],["gaming", 8],["sleeping", 3], ["football", 9]];

// forEach hobby in this case (swiiminh and 4), pop out position (1) 
myHobbies.forEach((hobby) => {
    hobby.pop(1)

})

console.log(myHobbies)


// Flattening the array 
// This removes all the sub-arrays and creates one array


let myHobbiesA = [["swimming", 4,],["gaming", 8],["sleeping", 3], ["football", 9]];

const flatArray = myHobbiesA.flat()

console.log(flatArray)