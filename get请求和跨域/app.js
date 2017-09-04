var express = require("express");
var app = express();
//这样任何静态资源都可以通过服务器访问
// app.use(express.static("public"));
app.all('*', function(req, res, next) {
    //CORS跨域方案 其他跨域方案有jsonp等
    res.header("Access-Control-Allow-Origin", "*")
    next();
});
app.get("/test",function(req,res){
    res.send("hello word !");
})
app.listen(3000,function(){
    console.log("node is ok !")
})