function fizzBuzz(a){
    if(typeof (a) != "number"){
    console.log("Vui lòng nhập số!");
    }
    else if(a%3 === 0 && a%5 === 0){
    console.log("FizzBuzz");
    }
    else if(a%5 === 0){
    console.log("Buzz");        
    }
    else if(a%3 === 0){
    console.log("Fizz");
    }
    else {console.log(a)};
}

fizzBuzz(15);