const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');

// const cors = require('cors');
//
// app.use(cors);
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});
const port = process.env.PORT|| 5000;
app.use(cookieParser());
app.use(express.json());
const mongoString='mongodb+srv://albi123:albi123@cluster0-ihrbv.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoString, function(err) {
    if (err) {
        throw err;
    } else {
        console.log(`Successfully connected to ${mongoString}`);
    }
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/jobs', require('./routes/api/jobs'));
app.use('/api/locations', require('./routes/api/locations'));
app.use('/api/categories', require('./routes/api/categories'));


app.listen(port, () => console.log(`Exam API running on port ${port}!`));