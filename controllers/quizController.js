const Question = require("../models/quizModel");

exports.getAll = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.status(200).json({
      status: "success",
      results: questions.length,
      data: { questions },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "An error occured",
      error: err,
    });
  }
};

exports.createQuestion = async (req, res, next) => {
  try {
    const newQuestion = {
      question: req.body.question,
      options: req.body.options,
      answer: req.body.answer,
    };

    await Question.create(newQuestion);

    req.status(201).json({
      status: "success",
      message: "Question added successfully",
      data: newQuestion,
    });
  } catch (err) {
      res.status(500).json({
        status: "failed",
        message: "An error occured",
        error: err,
      });
  }
};
