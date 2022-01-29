const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: [true, "Every quiz must have a question!"],
    unique: [true, "This quiz question has already been taken"],
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  answer: {
    type: String,
    enum: ["A", "B", "C", "D"],
  },
  category: {
    type: String
  }
});

const Question = mongoose.model("Quiz", questionSchema);

module.exports = Question;
