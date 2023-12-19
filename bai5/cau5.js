var value1 = "one";
var value2 = "two";

{
    let tmp = value1;
    value1 = value2;
    value2 = tmp;
}
console.log(value1);
console.log(value2);
