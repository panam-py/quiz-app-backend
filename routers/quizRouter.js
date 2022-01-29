const express = require("express");
const quizController = require('../controllers/quizController')

const router = express.Router();

router.route('/').get(quizController.getAll).post(quizController.createQuestion)

module.exports = router;
