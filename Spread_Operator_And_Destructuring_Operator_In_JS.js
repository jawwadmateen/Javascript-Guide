let arr=[10,11,12] //example of array
let [a, ,...rest]=arr
//console.log(rest);

//Destructuring Operator is helpful in assigning multiple values of an array 
// or object to multiple variables or objects in one line with ease

//spread operator 

let arr1=[1,2,3]  //spread operator is used to convert an array into an object
let obj={...arr1}
console.log(obj) //output { '0': 1, '1': 2, '2': 3, '3': 4 }

function sum1(v1,v2,v3)
{
    return v1+v2+v3
}

console.log(sum1(...arr1))  //if an array has n values and your function also 
//takes n values then you can pass your array like this as argument

//Search for more examples on MDN docs

//example you will mostly use in react
let obj3={
    name:"Lalo",
    Section:"G",
    Roll_Num:12
}

console.log({...obj3,name:"Faraz"}); //Changing Particular Key's value

console.log({name:"Faraz",...obj3}); //Changing Particular Key's value but in this case values will be same as obj3 is in end
