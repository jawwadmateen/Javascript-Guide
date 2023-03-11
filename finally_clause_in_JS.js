//finally clause in JS 
// code under the finally clause executes in any condition
//finally is useful to execute code in case there is an error in catch clause
//if the code is returning in try block and you have to execute piece code after try  catch
const f1=()=>
{
try
{
    console.log("hello world")
    return
}
catch(error)
{
    console.log(error)
    console.log(pqq)
}
finally 
{
    console.log("i am a good boy")
}
}

f1();
console.log("End of code")