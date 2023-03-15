class Animal
{
    constructor()
    {
        console.log("Hello")
    }
    bark()
    {
        console.log("bhaoooo")
    }
}

class Dog extends Animal
{
    
}
let a1=new Animal();
let a2=new Dog();
a1.bark();
console.log(a1 instanceof Animal);
console.log(a2 instanceof Dog) //instanceof returns true also for inherited class
//to check whether a1 is object of Animal or not
//returns true if object is of class and false if not
//true in this case