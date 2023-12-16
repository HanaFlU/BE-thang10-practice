const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {// req = yêu cầu, res = phản hồi
  // res.send("hello world") //không thể send và render cùng lúc
  res.render("index", { //render = kết xuất ??, index = index.pug
    title: "Trang chủ abc", // <variable>: <value>,
  });
  
});
app.get("/products", (req, res) => {
  res.send("<h1>Trang danh sách sản phẩm</h1>");
});

app.get("/blog", (req, res) => {
  res.send("<h1>Trang danh sách bài viết</h1>");
});

app.get("/contact", (req, res) => {
  res.send(`
    <h1>Trang liên hệ</h1>
    <p>Xin chào, tôi là <b>Nam</b></p>
    <p>Số điện thoại: <b>0123456789</b></p>
  `);
});

app.listen(port, () => {
  console.log("Đang chạy trên công " + port);
});
