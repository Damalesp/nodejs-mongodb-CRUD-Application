require('./models/mongodb');
 
//Import packages
const express = require('express');
var app = express();
const path = require('path');
const exphb = require('express-handlebars');
const bodyparser = require('body-parser');
 
const courseController = require('./controllers/courseController');
 
app.use(bodyparser.urlencoded({
extended: true
}));
 
//Create a welcome message and direct them to the main page
app.get('/', (req, res) => {
res.send('welcome to nodejs + mongodb');
});
app.use(bodyparser.json());
 
//Configuring Express middleware for the handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb({ extname: 'hbs', defaultLayout: 'mainLayouts', layoutDir: __dirname + '/views/layouts' }));
app.set('view engine', 'hbs');
 
// the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Set the Controller path which will be responding the user actions
app.use('/course', courseController);