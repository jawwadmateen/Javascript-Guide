class carBooking
{
    constructor(name,carModel)
    {
        console.log("constructor called")
        this.name=name
        this.carModel=carModel
    }
     carbooked()
    {
        alert(this.name+" Your car is booked")
    }
}

let ali=new carBooking("Ali","Mehran");
ali.carbooked();