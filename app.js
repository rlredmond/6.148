console.log('hello this is nathan');

const http = require('http');

this is Brian

const server = http.createServer(function(req, res) {
	res.end("AHHHHHHHHH");
});

const port = 3000;
server.listen(port, function() {
	console.log("Server running on port: " + port);
});
