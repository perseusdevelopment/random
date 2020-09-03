var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi There!");
});

app.get("/r/:subRedditName", function (req, res) {
    var subReddit = req.params.subRedditName;
    res.send("Welcome to the " + subReddit.toUpperCase() + " Subreddit");
});

app.get("/r/:subRedditName/comments/:id/:title/", function (req, res) {
    res.send("Welcome to a Deep! Subpage");
});

app.get("/bye", function (req, res) {
    res.send("Goodbye");
});

app.get("/dog", function(req, res){
    res.send("Meow!");
});

/* app.get("*", function (req, res) {
    res.send("You Are A Star!");
}); */

app.listen(3000, function(){
    console.log("Server Has Started");
});