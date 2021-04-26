const express = require("express");

const app = express();
const AuthRouter = require("../src/routes/AuthRoute");
const UserRouter = require("../src/routes/UserRoute");
const ProfileRouter = require("../src/routes/ProfileRoute");


require("./DB/mongoose");
require("./services/ScheduleService");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods","OPTIONS","GET","POST","PUT","PUTCH","DELETE")
  next();
});

app.use("/auth", AuthRouter);
app.use("/users", UserRouter);
app.use('/profile', ProfileRouter);

module.exports = app;
