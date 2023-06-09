const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

let HTML = fs.readFileSync(`${__dirname}/index.html`);

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/', (req, res, next) => {
	// console.log('someone made a request !! - ' + req.url);
	// res.cookie('CookieName','cookievalue');
	next();
})

app.use(bodyParser.json())
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const hello = (req, res, next) => {
	console.log('hello');
	next();
}

app.get('/', hello, (req, res) => {
	res.end(HTML)
})

app.get('/api/:username/:id', (req, res) => {
	let id = req.params.id;
	let username = req.params.username;
	res.send(`<html>
        <body>
            <h1 style="background:gray">The user id is ${id} and the username is ${username}</h1>
        </body>
    </html>`)
	// res.send({
	// 	name: 'test',
	// 	technology: 'react-js'
	// })
})

app.get('/api/technology', (req, res) => {
	// http://localhost:3000/api/technology?name=reactjs&version=18
	let name = req.query.name;
	let version = req.query.version;

	res.send({
		name,
		version
	})
})

app.get('/user', (req, res) => {
	let USER_HTML = fs.readFileSync(`${__dirname}/views/user.html`);
	res.end(USER_HTML);
})

app.get('/userquery', (req, res) => {
	let FORM_HTML = fs.readFileSync(`${__dirname}/views/form.html`);
	res.end(FORM_HTML);
})


app.post('/api/adduser', (req, res) => {
	console.log(req.body);
	res.sendStatus(200)
})

app.post('/api/queryadd', urlencodedParser, (req, res) => {
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;

	console.log(firstname)
	console.log(lastname)
	res.sendStatus(200)
})

app.get('*', (req, res) => {
	res.sendFile(`${__dirname}/views/noPage.html`);
})

const port = process.env.PORT || 3000;
app.listen(port);