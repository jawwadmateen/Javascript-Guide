class Animal
{
    constructor(name,color)
    {
        this.name=name
        this.color=color
    }
    AnimalMove()
    {
        alert("now moving")
    }
}

class Monkey extends Animal   //class child extends parent
{
   
    eatBanana()
    {
        console.log("Moneky is eating banana");
    }
}

let m1=new Monkey("chimpu","black");
m1.AnimalMove()