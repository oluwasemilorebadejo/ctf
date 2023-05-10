const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render("login", {
    title: "Log Into your account",
  });
});

exports.getSignupForm = catchAsync(async (req, res, next) => {
  res.status(200).render("signup", {
    title: "Sign up now!",
  });
});

exports.getOverview = catchAsync(async (req, res, next) => {
  res.status(200).render("overview", {
    title: "Log In successful",
  });
});

exports.getNewUser = catchAsync(async (req, res, next) => {
  res.status(200).render("account", {
    title: "Welcome",
  });
});
