const CONSTANTS = require("../constants");
const express = require("express");
require("dotenv").config();
const router = express.Router();
const ContactCtrl = require("../controllers/contact");

// API TO ADD CONTACT DETAILS
router.post(CONSTANTS.ENDPOINT.ADDCONTACT, function (req, res) {
  ContactCtrl.createContactDetails(req.body, function (err, user) {
    if (err) {
      res.json({ status: "success", response: err, statusCode: 404 });
    }
    console.log("[Info]: Sending Response :: ", user);
    res.json({ status: "success", response: user, statusCode: 200 });
  });
});

// API TO GET CONTACT DETAILS
router.get(CONSTANTS.ENDPOINT.CONTACTDETAILS, function (req, res) {
  ContactCtrl.getContactDetails(req, function (err, user) {
    if (err) {
      res.json({ status: "success", response: err, statusCode: 404 });
    }
    console.log("[Info]: Sending Response :: ", user);
    res.json({ status: "success", response: user, statusCode: 200 });
  });
});

module.exports = router;
