var input = prompt();

function convertTime(string){
    var TimeElements = string.slice(0,-2).split(":");
    var ampm = string.slice(-2);
    if(TimeElements[0] == "12"){
        TimeElements[0] =  "00";
    }    
    if( ampm == "PM"){
        TimeElements[0] = +TimeElements[0] + 12;
    }
   return (TimeElements.join(":"));
}

console.log(convertTime(input));
