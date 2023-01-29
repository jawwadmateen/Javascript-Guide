//Snake Water Gun Game in JavaScript

let choice=prompt("Enter \"S\" \"W\" or \"G\" ");
const alphabet = "SWG"

const pc_gen_choice=alphabet[Math.floor(Math.random() *alphabet.length)]
if(choice=="S" && pc_gen_choice=="W")
{
    alert("you won Snake drunk water")
}
else if(choice=="S" && pc_gen_choice=="G")
{
   alert("you lost Snake Killed By Gun")
}
else if(choice=="G" && pc_gen_choice=="S")
{
   alert("you won Snake Killed By Gun")
}
else if(choice=="W" && pc_gen_choice=="S")
{
   alert("you lost Snake drunk water")
}
else if(choice=="S" && pc_gen_choice=="G")
{
   alert("you lost Snake Killed By Gun")
}
else if(choice=="G" && pc_gen_choice=="W")
{
    alert("draw")
}
else if(choice=="W" && pc_gen_choice=="G")
{
    alert("draw")
}




