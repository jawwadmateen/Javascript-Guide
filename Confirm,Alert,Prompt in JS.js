//Prompt() Alert() and Confirm() in JS 
//A sincere contribution by Sheikh Jawwad Mateen

let a=prompt("Enter a number",55); //It is used to take user input as string (here 55 is the default value)
let write=confirm("Do you want to write on page?");  //confirms true or false and stores boolean value in write variable
if(write)
{
    document.write(a); //used to write variables on HTML page
}
else{
    
    alert(a); //it is used to invoke a mini window with a message

}



