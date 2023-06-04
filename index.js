const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Student = require('./models/student');

const app = express();

// Set the views directory
app.set('views', '.vscode/views');

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
const dbURI =
  'mongodb+srv://ghanaab:1234567890@devops.4pnnlmu.mongodb.net/devops?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT || 3000))
  .catch((err) => console.log(err));

// Define routes
app.get('/', (req, res) => {
  res.render('add_student');
});

app.post('/add_student', async (req, res) => {
  const { name, exam1, exam2, exam3 } = req.body;
  try {
    const student = new Student({
      name,
      exam1,
      exam2,
      exam3,
    });
    await student.save();
    res.sendStatus(302).redirect('/');
  } catch (err) {
    console.error('Error saving student', err);
    res.status(400).send('Invalid student data');
  }
});





module.exports = app;
