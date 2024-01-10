const express = require('express');
const router = express.Router();
const student = require('../models/schema');

const get_student = async (req, res)=>{
    res.render('student/login');
}

const get_marks_post = async (req, res)=>{
    let dob = new Date(req.body.dob);
    let result = await student.find({rollNumber : req.body.roll, dob : req.body.dob.substring(0, 11)});
    let data = [];
    if(result.length){
        data = result[0];       
    } else {
        data = "Incorrect credentials, please try again!";
    }
    res.render('student/result', {data});
}

module.exports = {
    get_student,
    get_marks_post
};