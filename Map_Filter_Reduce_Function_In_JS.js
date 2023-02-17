//Map Filter Reduce Array Methods in JS
let arr=[1,2,3,4,5,6,7]
let arr1=arr.map((element)=>
{
    return element*element   //map() functions returns an array with operations performed on each value of array
})
console.log(arr1)
// filter() function returns an array with elements passing the condition
let arr2=arr.filter((element)=>
{
    return element>5
})
console.log(arr2)
//reduce reduces an array to a single value
let sum_of_array=arr.reduce((element1,element2)=>
{
    return element1+element2
})
console.log(sum_of_array)