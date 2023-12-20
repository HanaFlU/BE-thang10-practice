function extentionFilename(filename){
    if(!filename.includes(".")){
        console.log("Đây không phải tên file.");
        return;
    }
return filename.split(".")[1];
}

console.log(extentionFilename("test.html"));
console.log(extentionFilename("abc.java"));
console.log(extentionFilename("xyz.js"));
