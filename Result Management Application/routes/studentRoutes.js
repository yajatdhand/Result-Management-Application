const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get("/login", studentController.get_student);
router.post("/getMarks", studentController.get_marks_post);

module.exports = router;