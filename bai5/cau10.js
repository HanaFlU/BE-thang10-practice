var a = "100";
var b = 20;
var c = true;

console.log(+a + b + c); //121
console.log(2000 + true); //2001
console.log(+ a); //100
console.log(+ c); //1
console.log(true + b +a); // (string)21100
// trả về: 121
// Giải thích:
// +a có dấu cộng trước biến a nên JS chuyển string thành số 100
// tương tự với true(1)

