let age=prompt("enter your age")
age=Number.parseInt(age)
try
{
if(age>100)
{
    throw new ReferenceError("Invalid age")
}
}
catch(error)
{
    console.log(error)
    //console.log(Error.name)
    //console.log(Error.message)
    //console.log(Error.stack)
}
console.log("Hello World")