const mongoose = require("mongoose");

// User Schema
var ContactSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    auto: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
