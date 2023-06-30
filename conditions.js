// If Statement
// If .... else statement
// If .... else ... if statement 

// The synatx of an if statement 
// if (condition) {
    
// }
// If (expression){
    //statements to be executed if expression  is true
//}
//else{
    //statements to be executed f expression is false
//}

//Examples

let weather = "shinning";
// if (weather == "shinning"){
//     console.log("We go swimming")
// }else{
//     console.log("Stay in the house and watch a movie")
// }

// let age = 12;
// if (age > 18){
//     console.log("You are eligible to get a driving license")
// }else if (age == 18){
//     console.log("You just became eligible to get a drving license")
// }else{
//     console.log("You are not eligible to get a drving license")
// }

// Ternary operator

//condition ? value if true : value if false 

// let cloudy = "carry your jacket";
// let shinny = "wear light clothes";

// let currentWeather = (weather == "cloudy") ? cloudy : shinny;

// console.log(currentWeather)

// Switch statement or switch case

// Examples of a switch case

// let startRating = 1;

// switch(startRating){

//     case 1:
//         console.log("very bad");
//         break;

//     case 2:
//         console.log("bad");
//         break;

//     case 3:
//         console.log("average");
//         break;

//     case 4:
//         console.log("good");
//         break;
    
//     case 5:
//         console.log("excellent");
//         break;
    
//     default:
//         console.log("Please enter a valid number between from 1 to 5")

// }


// Example 2

// let car = "Subaru";

// switch(car){

//     case "mercedez":
//         console.log("It's a fast car");
//         break;
//     case "Subaru":
//         console.log("It's a very noisy car");
//         break;
//     case "prado":
//         console.log("Its a comfortable car");
//         break;

//     case "land-cruiser":
//         console.log("Very expensive car");
//         break;

//     case "lexus":
//         console.log("Luxurious car");
//         break;

//     default:
//         console.log("Put an eligible car name");
// }

// Example 3

// let fruits = ["mangoes", "apples", "pineapples", "bananas"];

//  function processFruit(fruit){

//     switch(fruit){

//         case "mangoes":
//             console.log("They are yellow");
//             break;
//         case "apples":
//             console.log("They are green");
//             break;
//         case "pineapples":
//             console.log("They are orange");
//             break;
//         case "bananas":
//             console.log("They are long");
//             break;
//         case "lemons":
//             console.log("They are dark-green");
//             break;
//         case "cucumber":
//              console.log("They are light-green");
//             break;
    
//         default:
//             console.log("Not a fruit")
//     }
   
// }

// processFruit("cucumber")

// Example 4:

// switch(new Date().getDay()){

//     case 0:
//         console.log("Sunday");
//         break;

//     case 1:
//         console.log("Monday");
//         break;
  

//     case 2:
//         console.log("tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;
    
//     default:
//         console.log("This is any other day from Thursday to Saturday ")
    
// }

// let tvShows = ["Sanyu", "PL", "Ben10", "Prestige"];

// for(i = 0; i < tvShows.length; i++){

//     switch(tvShows[i]){

//         case "Sanyu":
//             console.log("This shows on Prime Magic");
//             break;

//         case "PL":
//             console.log("This shows on Super sport");
//             break;

//         case "Tsavo":
//             console.log("This shows on NatGeo Wild");
//             break;

//         default:
//             console.log("Please put valid show")
//     }
// }

let month = new Date().getMonth();

switch(month){

    case 0:
        console.log("January");
        break;

    case 1:
        console.log("February");
        break;
  
    case 2:
        console.log("March");
        break;

    case 3:
        console.log("April");
        break;

    case 5:
        console.log("June");
        break;
    
    default:
        console.log("This is any other month from May to December ")
    
}

// Method 2 using a for loop

// let fruits = ["Mangoes", "bananas", "oranges", "apples" ];

// for(let fruit of fruits){

//     switch(fruit){

//         case "mellon":
//             console.log("This is a mellon");
//             break;

//         case "oranges":
//             console.log("This are oranges");
//             break;

//         case "pawpaws":
//             console.log("This is are pawpaws");
//              break;

//         case "apples":
//             console.log("This are apples");
//             break;

//         default:
//             console.log("Fruit not specified")
//     }
// }

// Method 3

// let edibles = ["Mangoes", "bananas", "oranges", "apples" ];

// for(i = 0; i < edibles.length; i++ ){

//     switch(edibles[i]){

//         case "mellon":
//             console.log("This is a mellon");
//             break;

//         case "oranges":
//             console.log("This are oranges");
//             break;

//         case "pawpaws":
//             console.log("This is are pawpaws");
//              break;

//         case "apples":
//             console.log("This are apples");
//             break;

//         default:
//             console.log("Fruit not specified")
//     }
// }

// console.log(edibles.length)

// JS  assignment Group 3
// create 5 if statements 

const number =60;
// 1.
if (number > 0) {
  console.log("The number is positive.");
}else {
    console.log("The number is negative")
}

// 2 .
if (number % 2 == 0)  {
  console.log("The number is even.");
}else (
    console.log("The number is odd")
)

// 3.
if (number > 5) {
  console.log("The number is greater than 5.");
}else {
    "The number is not greater than 5"
}

// 4.
if (number == 10) {
  console.log("The number is equal to 10.");
}else if(number < 10){
    console.log("The number is less than 10")
}else{
    console.log("The number is greater than 10")
}

// 5.
if (number < 50) {
  console.log("You get a retake.");
}else{
    console.log("You passed");
}

// create 5 switch cases
// switch 1
const dayOfWeek = "Tuesday";
switch (dayOfWeek) {
    case "Monday":
      console.log("It's Monday.");
      break;
    case "Tuesday":
      console.log("It's Tuesday.");
      break;
    case "Wednesday":
      console.log("It's Wednesday.");
      break;
    case "Thursday":
      console.log("It's Thursday.");
      break;
    default:
      console.log("It's not a weekday.");
      break;
  }

//   switch 2
const fruit = "apple";
switch (fruit) {
    case "apple":
      console.log("Selected fruit: Apple");
      break;
    case "banana":
      console.log("Selected fruit: Banana");
      break;
    case "orange":
      console.log("Selected fruit: Orange");
      break;
    case "grape":
      console.log("Selected fruit: Grape");
      break;
    default:
      console.log("Unknown fruit");
      break;
  }
  
// Switch statement 3
const integer = 7;
switch (integer) {
    case 1:
      console.log("The number is one.");
      break;
    case 3:
      console.log("The number is three.");
      break;
    case 7:
      console.log("The number is seven.");
      break;
    case 10:
      console.log("The number is ten.");
      break;
    default:
      console.log("Unknown number.");
      break;
  }
  
  // Switch statement 4
  const color = "blue";
  switch (color) {
    case "red":
      console.log("The color is red.");
      break;
    case "blue":
      console.log("The color is blue.");
      break;
    case "green":
      console.log("The color is green.");
      break;
    case "yellow":
      console.log("The color is yellow.");
      break;
    default:
      console.log("Unknown color.");
      break;
  }
  
  // Switch statement 5
  const continent = "Japan";
  switch (continent) {
    case "USA":
      console.log("You're in the USA.");
      break;
    case "Canada":
      console.log("You're in Canada.");
      break;
    case "Australia":
      console.log("You're in Australia.");
      break;
    case "Japan":
      console.log("You're in Japan.");
      break;
    default:
      console.log("Unknown country.");
      break;
  }


// create a switch case for arrays
// const fruits = ["apple", "banana", "orange"];
function processFruit(fruit) {
  switch (fruit) {
    case "apple":
      console.log("You selected an apple.");
      break;
    case "banana":
      console.log("You selected a banana.");
      break;
    case "orange":
      console.log("You selected an orange.");
      break;
    default:
      console.log("Unknown fruit.");
      break;
  }
}
processFruit("grapes");


// usimg a loop
let edibles = ["Mangoes", "bananas", "oranges", "apples" ];

for(i = 0; i < edibles.length; i++ ){

    switch(edibles[i]){

        case "pawpaws":
            console.log("This is a mango");
            break;

        case "bananas":
            console.log("This are bananas");
            break;

        case "oranges":
            console.log("This is are oranges");
             break;

        case "apples":
            console.log("This are apples");
            break;

        default:
            console.log("Fruit not specified")
    }
}


//for of loop
// It allows you to iterate over iterable objects(arrys, sets, maps, strings etc)

// The syntax is

// for(element of iterable){
//     body of for of
// }

// Examples

const string = "Arsenal";

for(let i of string){
    console.log(i)
}

let foods = [{"apples":10},{"grapes":6},{"berries":8},{"bananas":4}];

for(food of foods){
    console.log(food)
}


// for___in loop
// Allows us iterate over all property keys of an object

for(food in foods){
    console.log(foods[food])
}

// Examples String

const stringA = "Refactory";

for(i in stringA){
    console.log(stringA[i])
}

//while loops 

let counter = 0;

while(counter <= 10){
    console.log("Counter is " +counter)
    counter++
}

// dowhile loop
// there is an execution even when the condition is false 
// normally not used because of the loophole it may have

let counterA = 1;

do{
    counterA--;
    console.log("Value of Counter A: " +counterA)
}while(counterA >=0)
