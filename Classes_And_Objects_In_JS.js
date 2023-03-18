class carBooking
{
    fillform(name,carmodel)
    {
        this.name=name;
        this.carmodel=carmodel;
    }
     carbooked()
    {
        alert(this.name+" Your car is booked")
    }
}

let ali=new carBooking;
ali.fillform("Ali","Mehran")
ali.carbooked();