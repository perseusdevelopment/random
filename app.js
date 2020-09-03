var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine" , "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/epicboards/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Ready Player One" , author: "Ernest Cline"},
        {title: "The Picture of Dorian Gray" , author: "Oscar Wilde"},
        {title: "Tell Tale Heart" , author: "Edgar Allen Poe"}
    ];
    res.render("posts", {posts: posts});
});

app.listen(3000, function () {
    console.log("Server is a GO");
});


