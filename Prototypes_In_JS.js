//Prototypes in JS
//Prototypes allow you to inherit methods and attributes of another object by using .__proto__ keyword
//It creates a chain in such a manner if obj1 is proto of obj 2 and obj2 is proto of obj3 then obj1 can also 
// access methods of obj3
//but it doesn't work in a reverse manner for e.g obj3 cannot access obj1 methods and attributes its will give u undefined 
let obj1={
    name:"Jawwad",

}
let obj2={
    roll_num:19
}

obj1.__proto__=obj2

let obj3={
    section:'G',
    run:()=>   //key is run  and value is arrow function this can also be done in JS
    {
        alert("run")
    }
}

obj2.__proto__=obj3

console.log(obj1.section)
obj1.run()



