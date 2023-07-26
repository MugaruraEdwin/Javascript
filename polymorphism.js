// Ploymorphism
// Ploy means many then morph means forms

// Ploymorphism in Oop is the ability to create a variable, a function, or an object that has more than one form.

//Polymorphsim is the Oop principle which provides the facility to perfrom one task in many ways.

// Examples

//1.


class Animal{
    constructor(animalName){
        this.animalName = animalName;
    }
    // This method / function is polymorphic because it also exists in the child class Aligator
    eats(){
        console.log(this.animalName,"eats meat");
    }
    walks(){
        console.log(this.animalName,"crawls");
    }
}
//Polymorphism combines inheritance
class Aligator extends Animal{
    eats(){
        super.eats(); //invoking super class method eats 
        console.log(this.animalName, "eats fish");
    }
    walks(){
        //invoking super class method walks won''t be necssary
        console.log(this.animalName, "walks");
    }

}

let animal1 = new Aligator("Bill");

animal1.eats();
animal1.walks();