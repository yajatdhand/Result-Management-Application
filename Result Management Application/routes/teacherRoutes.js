const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.teacher_get);
router.get('/login', teacherController.teacher_login_get);
router.post('/authAndView', teacherController.teacher_auth_and_view_post);
router.get('/options', teacherController.teacher_options_get);
router.get('/viewAll', teacherController.teacher_view_all);
router.get('/authAndView/studentEdit/:_id', teacherController.teacher_student_edit_get);
router.post('/authAndView/studentEdit/:_id/edit', teacherController.teacher_student_edit_post);
router.get('/authAndView/delete/:_id', teacherController.teacher_student_delete_get);
router.get('/addStudent', teacherController.teacher_add_student_get);
router.post('/add', teacherController.teacher_add_student_post);
router.get('/logout', teacherController.teacher_logout_get);

module.exports = router;