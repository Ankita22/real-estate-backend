const Contact = require("../models/contact");

module.exports.createContactDetails = function (body, callback) {
  const { name, email, mobileNumber, comment } = body;
  Contact.findOne({ email: email })
    .then(function (currentUser) {
      if (currentUser) {
        callback(null, "We already have your details.Thank you!");
      } else {
        var newUser = new Contact({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
          comment: comment,
        });
        newUser.save();
        callback(null, "Contact Information Saved. Thank You!");
      }
    })
    .catch((err) => {
      callback("ERROR OCCURRED", null);
      console.error(err);
    });
};

module.exports.getContactDetails = function (req, callback) {
  const email = req.query.email;
  User.findOne({ email: email })
    .then(function (currentUser) {
      if (currentUser) {
        callback(null, currentUser);
      } else {
        callback("CONTACT DETAILS NOT FOUND", null);
      }
    })
    .catch((err) => {
      callback("CONTACT DETAILS NOT FOUND", null);
      console.error(err);
    });
};

// module.exports.updateUser = function (req, callback) {
//   const user = req.body;
//   User.findByIdAndUpdate({ _id: user._id }, req.body, { new: true })
//     .then(function (currentUser) {
//       if (currentUser) {
//         callback(null, "USER DETAILS UPDATED");
//       } else {
//         callback("USER NOT FOUND", null);
//       }
//     })
//     .catch((err) => {
//       callback("USER NOT FOUND", null);
//       console.error(err);
//     });
// };
