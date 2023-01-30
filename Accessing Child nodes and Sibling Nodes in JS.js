//Accessing DOM Elements in JS (Siblings and Children Nodes)
//Refer to the below HTML code for understanding of  code provided below
console.log(document.body.firstElementChild)  //Output: <p> ...</p>
console.log(document.body.firstElementChild.firstElementChild) //Output: <span> ggg </span>
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling); //Output: <span> hhh </span>
 //there are many more feautures like these which u can search on internet 







/*<!DOCTYPE html><html lang="en">
    <head><meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title></head>
<body>
    <p>
    <span>ggg</span>
    <span>hhh</span>
</p>
<script src="script.js"></script></body>
</html> */



//Contribution By Sheikh Jawwad Mateen