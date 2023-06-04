const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema = new schema({
    name: String,
    exam1 : Int,
    exam2 : int,
    exam3 : int
}, {timestamps: true});

const Student = mongoose.model('Student', studentSchema);
module.exports =Student;