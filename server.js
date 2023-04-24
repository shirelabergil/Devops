const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('Hello')
})
app.get('/test', (req,res)=>{
    res.send('Test Hello')
})

module.exports = app