function checkSpeedLimit(v){
    if(v <= 70){
        console.log("Vận tốc an toàn");
    }
    else if(v <120){
        let overSpeed = (v-70);
        let findMoney = Math.floor(overSpeed/5)*30000;
        console.log("Bạn đã bị phạt: " + findMoney +"đ");
    }
    else{
       console.log("Bạn đã bị tước giấy phép lái xe"); 
    }
}


checkSpeedLimit(40)
checkSpeedLimit(70)
checkSpeedLimit(75)
checkSpeedLimit(99)
checkSpeedLimit(120)