var input = prompt();
function isPrime(a){
    let isPrime = true;
    for(let i = 2; i<=Math.sqrt(a); i++){
        if(a%i == 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

for(let i = 2; i<=input; i++){
    if(isPrime(i)) console.log("Số nguyên tố: " + i);
}

