const express = require("express");
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", viewController.getLoginForm);

router.get("/overview", viewController.getOverview);

router.get("/account", viewController.getNewUser);

// router.get("/login", viewController.getLoginForm);

router.get("/signup", viewController.getSignupForm);

module.exports = router;
