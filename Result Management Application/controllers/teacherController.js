const express = require('express');
const router = express.Router();
const student = require('../models/schema');

const teacher_get = (req, res) => {
    res.render('teacher/teacherLogin');
}

const teacher_login_get = (req, res) => {
    res.render('teacher/teacherLogin');
}

const teacher_auth_and_view_post = async (req, res) => {
    let studentData = "";
    if ((req.body && req.body.password && req.body.password === 'password@123') ?
        true : false) {
        res.cookie('password', req.body.password);
        res.render('teacher/options');
    } else {
        res.clearCookie('password');
        res.render("teacher/teacherLogin", {
            error: "Incorrect credentials!"
        })

    }

}

const teacher_options_get = (req, res) => {
    if (req.cookies.password) {
        res.render('teacher/options');
    } else {
        res.render('teacher/teacherLogin');
    }
}

const teacher_view_all = async (req, res) => {
    try {
        if (req.cookies.password) {
            studentData = await student.find();
            res.render('teacher/viewStudents', { studentData });
        } else {
            res.render('teacher/teacherLogin');
        }
    } catch (error) {
        console.log(error);
    }

}

const teacher_student_edit_get = async (req, res) => {
    try {
        let result = await student.findOne({ _id: req.params._id });
        res.render('teacher/editStudent', { result });
    } catch (error) {
        console.log(error);
    }

}

const teacher_student_edit_post = async (req, res) => {
    try {
        let result = await student.findByIdAndUpdate(req.params._id, req.body);
        res.redirect("/teacher/viewAll");
    } catch (error) {
        console.log(error);
    }

}

const teacher_student_delete_get = async (req, res) => {
    try {
        await student.findByIdAndDelete(req.params._id);
        res.redirect("/teacher/viewAll");
    } catch (error) {
        console.log(error);
    }

}

const teacher_add_student_get = async (req, res) => {
    if (req.cookies.password) {
        res.render('teacher/addStudent');
    } else {
        res.render('teacher/teacherLogin');
    }
}

const teacher_add_student_post = async (req, res) => {
    try {

        if (req.cookies.password) {
            let result = await student.find({ rollNumber: req.body.rollNumber });
            if (result.length) {
                res.render('teacher/addStudent', {
                    error: 'Roll number exists!'
                });
            } else {
                let result = await student.create(req.body);
                res.render('teacher/options');
            }
        } else {
            res.render('teacher/teacherLogin');
        }
    } catch (error) {
        console.log(error);
    }

}

const teacher_logout_get = async (req, res) => {
    try {
        if (req.cookies) {
            res.clearCookie('password');
            res.redirect('/');
        }
        else {
            res.redirect('back');
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    teacher_get,
    teacher_login_get,
    teacher_auth_and_view_post,
    teacher_options_get,
    teacher_view_all,
    teacher_student_edit_get,
    teacher_student_edit_post,
    teacher_student_delete_get,
    teacher_add_student_get,
    teacher_add_student_post,
    teacher_logout_get
};