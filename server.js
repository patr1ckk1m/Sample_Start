const session = require('express-session');
var express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
var app = express();

const sessionConfig = {
    saveUninitialized: true,
    resave: false,
    name: 'session',
    secret: 'secretstuff'
}

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('assets')));
app.use(session(sessionConfig));



require('./routes/index.js')(app);

const DEFAULT_PORT = 3377
const port = process.env.PORT || DEFAULT_PORT


console.log(`Server listening at port ${port}`)
app.listen(port);

