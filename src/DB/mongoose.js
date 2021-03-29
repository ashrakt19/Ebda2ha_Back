const mongoose = require("mongoose");
const { DB_URI } = require("../config/DBConfig");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Database");
});

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  autoIndex: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
