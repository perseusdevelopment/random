var express = require("express");
var app = express();

app.get ("/", function(req, res){
    res.send("Hi There!");
});

app.get("/bye", function (req, res) {
    res.send("Goodbye");
});

app.get("/dog", function(req, res){
    res.send("Meow!")
});

app.get("*", function (req, res) {
    res.send("You Are A Star!");
});

app.listen(3000, function(){
    console.log("Server Has Started");
});