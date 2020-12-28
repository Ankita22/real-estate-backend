const Login = require("../models/login");

module.exports.registerUser = function (body, callback) {
  const { firstName, lastName, registerUsername, registerpwd, email } = body;
  Login.findOne({ email: email })
    .then(function (currentUser) {
      if (currentUser) {
        callback(null, "USER IS ALREADY REGISTERED");
      } else {
        var newUser = new Login({
          firstname: firstName,
          lastname: lastName,
          username: registerUsername,
          password: registerpwd,
          email: email,
        });
        newUser.save();
        callback(null, "USER REGISTERED SUCCESSFULLY");
      }
    })
    .catch((err) => {
      callback("ERROR OCCURRED", null);
      console.error(err);
    });
};

module.exports.loginUser = function (body, callback) {
  const { username, password } = body;
  Login.findOne({ username: username, password: password })
    .then(function (currentUser) {
      if (currentUser) {
        callback(null, currentUser);
      } else {
        callback("Login DETAILS NOT FOUND", null);
      }
    })
    .catch((err) => {
      callback("Login DETAILS NOT FOUND", null);
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
