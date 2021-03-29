const express = require("express");

const app = express();
const AuthRouter = require("../src/routes/AuthRoute");
const UserRouter = require("../src/routes/UserRoute");


require("./DB/mongoose");
require("./services/ScheduleService");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/auth", AuthRouter);
app.use("/users", UserRouter);


module.exports = app;
