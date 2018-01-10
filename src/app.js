const http = require('http');
const express = require("express");

const app = express();

app.get("/", function(req,res) {
	res.send("bah")
});


const port = 3000;
const server = http.Server(app);
server.listen(port, function() {
	console.log("Server running on port: " + port);
});
