class Animal
{
    constructor(name)
    {
       this._name=name
    }
    get name()
    {
        return this._name;
    }
    set name(newName)
    {
        this._name=newName
    }
    displayName()
    {
        console.log(this._name);
    }
}

let a1=new Animal("ha");
a1.displayName();
a1.name="Falcon";
a1.displayName();