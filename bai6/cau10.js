let price = 100;
const discount = false;
const discountAmount = 30;
const country = "Việt Nam";
const isStudent = true;

if(discount){
    price -= discountAmount;
}else if(country == "Việt Nam"){
    if(isStudent){
        price -= discountAmount + 30;
    }
    else {
        price -= discountAmount +10;
    }
}
else {
    price -= 10;
}

console.log(price);