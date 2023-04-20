const express = require("express");
const { signup, signin } = require("../controller/auth.controller");

const authRoutes = express.Router();

//CREATE A USER
authRoutes.post("/signup", signup);

//SIGN IN
authRoutes.post("/signin", signin);

//GOOGLE AUTH
// authRoutes.post("/google", googleAuth)

module.exports = {
  authRoutes,
};
