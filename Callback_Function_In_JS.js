function func1(arg1,callback)
{
    if(arg1=="Jawwad")
    {
        callback(arg1);
    }
    else
    {
        callback("Aslam")
    }
    
    console.log(arg1+" Hello ")
}

function callback_func(name)
{
    console.log(name);
}
let a1="arif"
func1(a1,callback_func);