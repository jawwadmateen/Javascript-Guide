const obj={  //revisiting arrow functiions
    a:"akram",
    b:function ()
    {
        setTimeout(()=>
        {
            console.log(this.a)  //we can use this.a due to arrow function and in case of normal function this keyword won't work
        })
        
        return this.a
    }
}
console.log(obj.b()) 

const func1=name=>console.log(name)
func1("d")
