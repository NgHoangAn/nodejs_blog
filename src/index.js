const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const path = require('path');
const app = express()
const port = 4000
//static 
app.use(express.static(path.join(__dirname,'public')));

//http logger
app.use(morgan('combined'));
//template engine
app.engine('hbs', hbs.engine({
    extname:'.hbs'
}));

app.set('view engine','hbs')
app.set('views', path.join(__dirname,'resources','views'))
app.get('/', (req,res) => {
    res.render('home')
})

app.listen(port, () => console.log(`app listen at http://localhost:${port}`))