require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const router = require('./src/routes/router');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

mongoose.connect(process.env.MONGO_URI)
    .then(resp => app.emit('successfully'))
    .catch(e => console.log(e));

const sessionConfig = session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.MONGO_URI }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true, 
    }
});

app.use(flash());

app.use(sessionConfig);

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(router);

app.on('successfully', () => app.listen(3000, () => console.log('https://localhost:3000')));
