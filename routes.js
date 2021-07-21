
const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if(url === '/') {
		res.setHeader('Content-Type', 'text-html');
		res.write('<html>');
		res.write('<head><title>My first app</title></head>');
		res.write('<body>');
		res.write('<h1>Hi, welcome to my first nodejs app!</h1>');
		res.write('<form action="/create-user" method="POST">');
		res.write('<input type="text" name="user"></input>');
		res.write('<button type="submit">Create user</button>')
		res.write('</form>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	}
	if(url === '/user') {
		res.setHeader('Content-Type', 'text-html');
		res.write('<html>');
		res.write('<head><title>My first app</title></head>');
		res.write('<body>');
		res.write('<ul>');
		res.write('<li>User dummy 1</li>');
		res.write('<li>User dummy 2</li>');
		res.write('<li>User dummy 3</li>');
		res.write('<li>User dummy 4</li>');
		res.write('<li>User dummy 5</li>');
		res.write('</ul>');
		res.write('</body>');
		res.write('</html>');
		return res.end();
	}
	if(url === '/create-user' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString('utf8');
			const user = parsedBody.split('=')[1];
			res.write('<html>');
			res.write('<head><title>My first app</title></head>');
			res.write('<body>');
			res.write(`<h1>Nuevo usuario: ${user}</h1>`);
			res.write('</body>');
			res.write('</html>');
			return res.end();
		});
		res.setHeader('Content-Type', 'text-html');
		res.statusCode = 200;
		
	}
};

module.exports = requestHandler;

