class Employee
{
    requestLeave(x)
    {
        console.log(`${x} leaves granted`)
    }
    
}

class Programmer extends Employee
{
    constructor(name)   //constructor of derived class must call the super constructor basically constructor of base class
    {   //overriding constructor
        super() //first line must be always like this
        this.name=name
        console.log(`${this.name}`);
    }//if the constructor of derived class is not created then constructor of base class is called
    requestLeave(leave)
    {
        let l1=leave+1;
        super.requestLeave(l1)
        console.log("one extra leave for programmer granted")
    }
}

let p1=new Programmer("Ahsanullah")
p1.requestLeave(5)