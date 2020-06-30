const CONSTANTS = require("../constants");
const express = require("express");
require("dotenv").config();
const router = express.Router();
const ProjectCtrl = require("../controllers/project");

// API TO GET PROJECT DETAILS
router.get(CONSTANTS.ENDPOINT.PROJECTDETAILS, function (req, res) {
  ProjectCtrl.getProjectDetails(req, function (err, user) {
    if (err) {
      res.json({ status: "success", response: err, statusCode: 404 });
    }
    console.log("[Info]: Sending Response :: ", user);
    res.json({ status: "success", response: user, statusCode: 200 });
  });
});

module.exports = router;
