const express = require('express');
const {authUser} = require('../middlewares/auth.middleware')
const interviewController = require('../controllers/interviewController')
const upload = require('../middlewares/file.middleware')

const interviewRouter = express.Router();

/**
 * @route POST /api/interview 
 * @description Generate an interview report based on the candidate's resume, self-description, and job description.
 * @access Private
 
 */

interviewRouter.post('/', authUser, upload.single('resume'), interviewController.generateInterviewReportController);


module.exports = interviewRouter
