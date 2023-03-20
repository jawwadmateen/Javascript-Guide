class Animal
{
    constructor(name)
    {
        this.name=name
    }
    
    static capitalizeName(x) //Static class methods are defined on the class itself.


    {
        let y=x.toUpperCase()
        return y;
    }
    AnimalName()
    {
        let z=Animal.capitalizeName(this.name) //You cannot call a static method on an object, only on an object class.
        console.log(z+" is the name");
        
    }
}

let y=new Animal("monkey")
y.AnimalName()