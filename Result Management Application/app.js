const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const env = require("dotenv").config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const morgan = require('morgan');

app.use(cookieParser());
app.use('/public', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('tiny'));

//register view engine
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
})
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes); //all these should be in last
app.get('*', (req, res) => {
    res.status(404).send('Page not found!');
});

//mongoDB atlas connection and initializing server
mongoose.connect('<your-mongodb-url>').then(() => {
    console.log('Connected to database');
    app.listen(4200, () => {
        console.log("Server is running on port 4200");
    });    
}).catch((err) => { console.error(err); });





