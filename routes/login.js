const CONSTANTS = require("../constants");
const express = require("express");
require("dotenv").config();
const router = express.Router();
const LoginCtrl = require("../controllers/login");

// API TO REGISTER USER
router.post(CONSTANTS.ENDPOINT.REGISTER, function (req, res) {
  LoginCtrl.registerUser(req.body, function (err, user) {
    if (err) {
      res.json({ status: "success", response: err, statusCode: 404 });
    }
    console.log("[Info]: Sending Response :: ", user);
    res.json({ status: "success", response: user, statusCode: 200 });
  });
});

// API TO CHECK USER LOGIN
router.post(CONSTANTS.ENDPOINT.LOGIN, function (req, res) {
  LoginCtrl.loginUser(req.body, function (err, user) {
    if (err) {
      res.json({ status: "success", response: err, statusCode: 404 });
    }
    console.log("[Info]: Sending Response :: ", user);
    res.json({ status: "success", response: user, statusCode: 200 });
  });
});

module.exports = router;
