const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const path = require('path');
const app = express();
const port = 4000

const route = require('./routes');
//static 
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//http logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);


app.listen(port, () => console.log(`app listen at http://localhost:${port}`))