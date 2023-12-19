var radius = prompt();

// cạnh huyền**2 = 2*cạnh góc vuông**2 
// => (radius*2)**2 = 2*cạnh góc vuông**2
// Diện tích hình vuông bé = [(radius*2)**2]/2
// Diện tích hình vuông lớn = (2*radius)**2

var kq = (2*radius)**2 - ((radius*2)**2)/2 ;
console.log(kq);
