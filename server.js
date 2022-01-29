const app = require("./app");
const mongoose = require("mongoose");

let DB;
const PORT = process.env.PORT

if (process.env.ENV == "development") {
  DB = process.env.DB_DEV;
} else {
  DB = process.env.DB_PROD;
}

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB CONNECTED!!");
  })
  .catch((err) => {
    console.log("AN ERROR OCCURED: ", err);
  });

app.listen(PORT, () => {
    console.log("APP RUNNNING ON PORT",PORT)
})
