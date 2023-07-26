// Access element by ID

const demoiD = document.getElementById("demo");
// adding styles to variable demo1D
demoiD.style.border = "2px solid blue";

// Access elements by class name

let demoClass = document.getElementsByClassName("demo");

// looping through elements wth class "demo" using the for loop

for(let element = 0; element < demoClass.length; element++ ){
    // takes demoClass as an array
    demoClass[element].style.border = "2px solid green"

}

//Styling individual elements
// accessing elements in array demoClass one at a time

demoClass[0].style.border ="2px dotted orange";

let articleTag = document.getElementsByTagName("article");

for(i = 0; i < articleTag.length ;i++){
    articleTag[i].style.border = "2px solid red";
}

//Individual

articleTag[1].style.border = "2px groove yellow"

// Access element by QuerySelector (best for ids) and elements used once in your code

let demoQuery = document.querySelector("#demo-query");

demoQuery.style.border = "2px solid green"

// Access elements by Query Selector All (best for classes)

let demoQueryAll = document.querySelectorAll(".demo-query-all");

// for(a = 0; a < demoQueryAll.length; a++){
//     demoQueryAll[a].style.border = "2px solid purple";
// }
//using the forEach loop
demoQueryAll.forEach( item => {
    item.style.border = "2px solid purple";
});

// Individual access index 1
demoQueryAll[1].style.border = "2px dotted red";

//

// Button

// Methi=od 1 calling onclick in HTML
function changeMe(){
    //declaring variable with limites scope 
    let paragraph = document.querySelector("p");
    // paragraph.textContent = "I changed because of an inline event handler";
    paragraph.innerHTML = "I changed because of an inline event handler";
    paragraph.style.border = "2px solid cyan";
}

// Method 2 calling onlick in js
function writeTo(){
    let writeInTo = document.getElementById("opp");
    writeInTo.textContent = "We are writing into the div through the button tag";
    writeInTo.style.border = "2px dotted yellow"
}

const but = document.getElementById("pop");
but.onclick = writeTo;// sometimes may require parentheses 
// 