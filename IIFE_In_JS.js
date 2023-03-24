var a=13;  //IIFE immediately invoked function expression
(func1=function(num=3) //default paramter 
{
    var a=121
    console.log(a)
    console.log(num)
})();
func1(5)
console.log(a)