func1()  //Hoisting in JavaScript
//In JavaScript, a variable can be declared after it has been used.
console.log(a) //a variable can be used before it has been declared.
function func1()
{
    console.log("hello world")
}
var a;
a=10
console.log(a)

//In case of let and const variables you cannot use them before initialization

console.log(b) //ReferenceError: Cannot access 'b' before initialization
let b=10;

//function expressions and class expressions are not hoisted
/*for eg const greet=()=>
{
    console.log("hello world")
} */