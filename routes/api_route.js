const router = require("express").Router();
const contactRouter = require("./contact");
const projectRouter = require("./project");
const loginRouter = require("./login");

// Contact Routes
router.use("/contact", contactRouter);

// Projects Routes
router.use("/project", projectRouter);

// Projects Routes
router.use("/user", loginRouter);

module.exports = router;
