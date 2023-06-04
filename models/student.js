const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema = new schema({
    name: String,
    exam1 : Number,
    exam2 : Number,
    exam3 : Number
}, {timestamps: true});

const Student = mongoose.model('Students', studentSchema);
module.exports =Student;