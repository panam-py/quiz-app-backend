const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const quizRoutes = require("./routers/quizRouter");

dotenv.config({ path: "./config.env" });

const app = express();

if (process.env.ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/quiz", quizRoutes);

module.exports = app;
