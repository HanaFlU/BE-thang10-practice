var theName = "  28Tech  ";

console.log(theName); //string:  28Tech  
console.log(theName[1]); //" "
console.log(theName[5]); //"e"

console.log(theName.charAt(1)); //" "
console.log(theName.charAt(5)); //"e"

console.log(theName.length); //10

console.log(theName.trim()); //28tech

console.log(theName.toUpperCase()); //"  28TECH  "
console.log(theName.toLowerCase()); //"  28tech  "

console.log(theName.trim().charAt(5).toUpperCase()); 
//"28Tech" -> "h" -> "H"