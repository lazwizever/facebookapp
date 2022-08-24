const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000

const url = 'mongodb://localhost/facebook'
mongoose.connect(url,{ useNewUrlParser: true })
const con = mongoose.connection


con.on("open", () => {
    console.log('MongoDB Connected!')
})

app.listen(port, () => {
    console.log(`App is listening on port -  ${port}`);
})

