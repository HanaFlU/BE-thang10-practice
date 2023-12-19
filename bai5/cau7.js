//Đề bài: kiểm tra một chuỗi co phải palinfrome không
var string = prompt();
const l = string.length;
var flag = 1;
for(let i = 0; i<l/2 && flag!=0; i++){
    if(string[i] !== string[l-1-i]){
        flag = 0;
    }
}
if(flag == 1) console.log(true);
else console.log(false);


