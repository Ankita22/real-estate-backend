const router = require("express").Router();
const contactRouter = require("./contact");
const projectRouter = require("./project");

// Contact Routes
router.use("/contact", contactRouter);

// Projects Routes
router.use("/project", projectRouter);

module.exports = router;
