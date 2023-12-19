var a = "Daca.vn - Professional Web Design Services.";

console.log(a.indexOf("Web")); //23
console.log(a.indexOf("Web", 24)); // -1
console.log(a.indexOf("vn")); //5

console.log(a.lastIndexOf("Design")); //27

console.log(a.slice(10, 22)); //Professional
console.log(a.slice(-16, -10)); //Design

console.log(a.split("", 7)); //Mảng các ký tự:Daca.vn
