const express = require('express')
const mongoose = require('mongoose')

const app = express()

//connect to mongoDB
const dbURI = 'mongodb+srv://<ghanaab>:<1234567890>@devops.4pnnlmu.mongodb.net/devops?retryWrites=true&w=majority' ;
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
})
    .then((result)=> app.listen(process.env.PORT || 3000) )
    .catch((err)=> console.log(err) );

app.get('/', (req,res)=>{
    res.send('Hello')
})
app.get('/test', (req,res)=>{
    res.send('Test Hello')
})

module.exports = app