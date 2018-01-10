console.log('hello this is brian');

const http = require('http');

doge

const server = http.createServer(function(req, res) {
	res.end("AHHHHHHHHH");
});

const port = 3000;
server.listen(port, function() {
	console.log("Server running on port: " + port);
});
