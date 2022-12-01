// const express = require('express');
// const app = express();
// const static = express.static(__dirname + '/public');
// const configRoutes = require('./routes');
// const exphbs = require('express-handlebars');
// // const bodyParser = require('body-parser');
// const session = require('express-session')
// const {engine} = require('express-handlebars')

// const handlebarsInstance = exphbs.create({
// defaultLayout: 'main',
// helpers: {
//     asJSON: (obj, spacing) => {
//     if (typeof spacing === 'number')
//         return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
//     return new Handlebars.SafeString(JSON.stringify(obj));
//     }
// }
// });

// const rewriteUnsupportedBrowserMethods = (req, res, next) => {
// if (req.body && req.body._method) {
//     req.method = req.body._method;
//     delete req.body._method;
// }
// next();
// };

// app.use('/public',static);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // app.use(rewriteUnsupportedBrowserMethods);

// app.engine('handlebars', engine({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');


// app.use(session({
//   name: 'AuthCookie',
//   secret: 'Some Secret!',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 600000000 }

// }))
// app.use('/loggedIn', async (req, res, next) => {
//   if(!req.session.user)
//     return res.status(403).redirect('/login');
//   else
//     next();
// });
// app.use(async (req, res, next) => {

//   if(!req.session.user)
//     console.log("["+new Date().toUTCString()+"]:"+" "+req.method+" "+req.originalUrl+" (Non-Authenticated User)");
//   else
//     console.log("["+new Date().toUTCString()+"]:"+" "+req.method+" "+req.originalUrl+" (Authenticated User)");
//   next();
// });
const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');
const path = require('path');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');
const session = require('express-session');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(
	session({
		name: 'AuthCookie',
		secret: 'key',
		saveUninitialized: true,
		resave: false,
	})
);

app.get('/private', (req, res, next) => {
	if (req.session.user) {
		next();
	} else {
		return res.status(403).sendFile(path.resolve('static/errorhandled.html'));
	}
});

app.use(async (req, res, next) => {
	console.log(new Date().toUTCString());
	console.log(req.method);
	console.log(req.originalUrl);
	if (req.session.user) {
		console.log('Authenticated User');
	} else {
		console.log('Non-Authenticated User');
	}
	next();
});

configRoutes(app);

app.listen(3000, () => {
	console.log('we have got a new server!');
	console.log('Your routes will be running on http://localhost:3000');
});