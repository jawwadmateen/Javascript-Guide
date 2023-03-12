let a=prompt("Enter your name")
let b=prompt("Enter your Value")
document.cookie=`${encodeURIComponent(a)}=${encodeURIComponent(b)}` //to encode special characters such as ;; in name of key 
decodeURIcomponent("A%3B%3B")  //key of the cookie will be inserted as string
