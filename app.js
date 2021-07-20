const http = require('http');


const rqListener = (req, res) => {
    
}

const server = http.createServer((req, res) => {
	console.log(req);
});

server.listen(3000);