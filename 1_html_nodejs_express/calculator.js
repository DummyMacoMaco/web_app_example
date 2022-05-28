const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: true});

const port = 3000;

// route: localhost:3000 to return static files: index.html and style.css
app.use(express.static('public_static_files'));

// POST /login gets urlencoded bodies
app.post('/', urlencodedParser, (req, res) => {
	console.log(req.body);
	let num1 = Number(req.body.num1);
	let num2 = Number(req.body.num2);
	res.send('result: ' + (num1 + num2));
	}
  );

app.listen(port, () => console.log(`Server listening on port: ${port}`));