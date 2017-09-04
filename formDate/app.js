var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}));
app.post("/test",function(req,res){
    // req.body;//接收数据
    res.send("hello world !");
})
app.listen(3000,function(){
    console.log("node is ok !")
})