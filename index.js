const express = require('express')
const app = express()
const port = 4000

app.get('/', (req,res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    res.send('Hello world')
})

app.listen(port, () => console.log(`app listen at http://localhost:${port}`))