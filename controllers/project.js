const constants = require("../constants");

module.exports.getProjectDetails = function (req, callback) {
  let projects = constants.PROJECTS;
  callback(null, projects);
};
