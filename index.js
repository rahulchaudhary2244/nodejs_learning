const { verifyAuth } = require('./middlewares/auth/verifyAuth');
const { logUrl } = require('./middlewares/logger/logger');
require('dotenv').config(); //to read .env file
const mongoose = require('mongoose');

const express = require('express');
const app = express();
app.use(express.json());
const port = 8082;

//Global middleware
app.use(verifyAuth);
app.use(logUrl);
//app.use(express.urlencoded({ extended: true })); //to read form data

app.get('/', (req, res) => {
    res.status(404).send('No Data');
});

//routes
app.use('/currencies', require('./routes/currencies'));
app.use('/users', require('./routes/users'));
app.use('/blogs', require('./routes/blogs'));

const DB_URI = 'mongodb://127.0.0.1:27017';

mongoose
    .connect(`${DB_URI}`)
    .then(() => {
        console.log('Connected to DB at', DB_URI);
        app.listen(port, () => {
            console.log(`Listening at port ${port} ...`);
        });
    })
    .catch((e) => console.log('Failed to connect to DB', e));
