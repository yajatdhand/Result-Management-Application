const mongoose = require("mongoose")
 
const student_schema = new mongoose.Schema({
    name: String,
    rollNumber: String,
    dob:String,
    marks:String,
});
 
const student = mongoose.model("students",student_schema);
 
module.exports= student;