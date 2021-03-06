const http = require('http');
const express = require("express");
const app = express();

app.use("/static", express.static("public"));

app.get("/", function(req,res) {
	res.sendFile("index.html", {root: "src/views"});
});
app.get("/index.html", function(req,res) {
	res.sendFile("index.html", {root: "src/views"});
});
app.get("/profile.html", function(req,res) {
	res.sendFile("profile.html", {root: "src/views"});
});
app.get("/profile/memes.html", function(req,res) {
	res.sendFile("memes.html", {root: "src/views"});
});
app.get("/home.html", function(req,res) {
	res.sendFile("home.html", {root: "src/views"});
});

const port = 3000;
const server = http.Server(app);
server.listen(port, function() {
	console.log("Server running on port: " + port);
});
