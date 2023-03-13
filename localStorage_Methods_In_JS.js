let key=prompt("Enter your name")
let value=prompt("Enter your Value")
localStorage.setItem(key,value);
localStorage.getItem(key);
localStorage.clear(key);
localStorage.removeItem(key);
localStorage.length; //its a property not a function so paranthesis is not required
localStorage.key(0); //gives key with 0 index like an array 
//there are many more localStorage methods which you can search on internet but mostly used ones are above
//the key and value is of type string 