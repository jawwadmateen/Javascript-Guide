//Guess the Number Game
//Prompt Will not Run in VSCODE try to run it in browser's console
//Code by Sheikh Jawwad Mateen 

let User_Count=0;
let num=Math.floor(Math.random() * 10);
let User_Told_Num=0;

do{
   User_Told_Num=prompt("Guess a Number");
   if(User_Told_Num>num)
   {
       console.log("Number is greater than the guess")
   }
   else
   {
       console.log("Number is less than the guess ")
   }
   User_Count++;
}while( User_Told_Num!=num);


console.log("Your Guess Is Correct")
let score=100-User_Count;
console.log(score)