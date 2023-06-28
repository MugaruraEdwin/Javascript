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

let cloudy = "carry your jacket";
let shinny = "wear light clothes";

let currentWeather = (weather == "cloudy") ? cloudy : shinny;

console.log(currentWeather)

// Switch statement or switch case

// Examples of a switch case

let startRating = 1;

switch(startRating){

    case 1:
        console.log("very bad");
        break;

    case 2:
        console.log("bad");
        break;

    case 3:
        console.log("average");
        break;

    case 4:
        console.log("good");
        break;
    
    case 5:
        console.log("excellent");
        break;
    
    default:
        console.log("Please enter a valid number between from 1 to 5")

}


// Example 2

let car = "Subaru";

switch(car){

    case "mercedez":
        console.log("It's a fast car");
        break;
    case "Subaru":
        console.log("It's a very noisy car");
        break;
    case "prado":
        console.log("Its a comfortable car");
        break;

    case "land-cruiser":
        console.log("Very expensive car");
        break;

    case "lexus":
        console.log("Luxurious car");
        break;

    default:
        console.log("Put an eligible car name");
}

// Example 3

let fruits = ["mangoes", "apples", "pineapples", "bananas"];

switch(fruits){

    // case "mangoes":
    //     console.log("They are yellow");
    //     break;
    // case "apples":
    //     console.log("They are green");
    //     break;
    // case "pineapples":
    //     console.log("They are orange");
    //     break;
    case fruits["bananas"]:
        console.log("They are long");
        break;
    case "lemons":
        console.log("They are dark-green");
        break;
    case "cucumber":
         console.log("They are light-green");
        break;

    default:
        console.log("Not a fruit")
    

}

// Example 4:

switch(new Date().getDay()){

    case 0:
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;
  

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
    
    default:
        console.log("This is any other day from Thursday to Saturday ")
    
}

