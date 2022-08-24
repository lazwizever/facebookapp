const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000

const url = 'mongodb://127.0.0.1/facebook'
mongoose.connect(url,{ useNewUrlParser: true })
const connection = mongoose.connection

const User = require('./routes/users')

app.use(express.json())

app.use('/users',User)

connection.on("open", () => {
    console.log('MongoDB Connected!')
})



app.listen(port, () => {
    console.log(`App is listening on port -  ${port}`);
})



