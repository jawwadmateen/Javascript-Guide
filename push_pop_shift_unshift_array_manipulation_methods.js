//Array Functions push() pop() shift() unshift()
let arr1=[1,2,3,4,5,6]
let a=arr1.push(7); //push() function pushes the element at the end of array and returns the new length of array.It modifies the original array
console.log(a) //updated length of array 
console.log(arr1); //updated array

let b=arr1.pop(); //pop() removes the last element from the array and updates the original array and returns the popped element
console.log(b) //popped element 
console.log(arr1) //updated array

let c=arr1.shift() //shift() removes the first element from the array and updates the original array and returns the removed element 
console.log(c)

console.log(arr1);// updated array

let d=arr1.unshift(1); //unshift() add new element at the start of array and updates the original array and returns the length of the updated array
console.log(d) // new length of array
console.log(arr1); //updated array