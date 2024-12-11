const express = require('express')
const app = express()
const port = 5000;

const mongodb = require('./db');
mongodb();
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', require("./routes/createUser"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})