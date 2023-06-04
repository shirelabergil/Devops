const express = require('express')
const mongoose = require('mongoose')
const student = require('./models/student');

const app = express()

//connect to mongoDB
const dbURI = 'mongodb+srv://ghanaab:1234567890@devops.4pnnlmu.mongodb.net/devops?retryWrites=true&w=majority' ;
mongoose.connect( dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  
})
    .then((result)=> app.listen( process.env.PORT || 3000) )
    .catch((err)=> console.log(err) );

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.get('/test', (req,res)=>{
    res.send('Test Hello')
})

app.get('/add-student', (req, res) => {
    const newStudent = new student({  // Use a different variable name here
      name: 'shirel abargil',
      exam1: 100,
      exam2: 95,
      exam3: 98
    });
  
    newStudent.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  


module.exports = app