const express = require('express')
const mongoose = require('mongoose')
const student = require('./models/student');

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

app.get('/add-student', (req,res)=> {
    const student = new student({
        name: 'shirel abargil',
        exam1: 100,
        exam2: 95,
        exam3: 98

    });

    student.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });

})


module.exports = app