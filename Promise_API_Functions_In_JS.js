let p1=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(1);
    },1000)
})

let p2=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(2);
    },2000)
})
let p3=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(3);
    },3000)
})

let p4=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(4);
    },4000)
})

let all_promises=Promise.race([p1,p2,p3,p4])
all_promises.then((value)=>
{
    console.log(value)
})
 all_promises=Promise.all([p1,p2,p3,p4])
all_promises.then((value)=>
{
    console.log(value)
})
 all_promises=Promise.allSettled([p1,p2,p3,p4])
all_promises.then((value)=>
{
    console.log(value)
})
//There are many more functions of Promise API refer to other resources
 
