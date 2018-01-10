console.log('hello this is nathan');

nathan's version

const http = require('http');

nah, this is what we should have here

const server = http.createServer(function(req, res) {
	res.end("AHHHHHHHHH");
});

const port = 3000;
server.listen(port, function() {
	console.log("Server running on port: " + port);
});
