var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("public"));
//支持post请求
app.use(bodyParser.urlencoded({
    extended:false
}))
// app.use(bodyParser.json())
app.post("/test",function(req,res){
    res.send("hello world !");
})
app.listen(3000,function(){
    console.log("node is ok !")
})