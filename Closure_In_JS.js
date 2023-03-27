function a1()  //a closure is a function with its lexical envirionment
{
    let x=10;
    console.log(x);
    function a2()
    {
        console.log(x)  //in this case there is no local variable x so it will use updated x before return statement .
    }
    x=11;
    return a2
}

let y=a1()
y()