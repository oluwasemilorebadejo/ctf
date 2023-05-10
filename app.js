const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// if (process.env.NODE_ENV === "development") {
app.use(morgan("dev"));
// }
console.log(`ENVIROMENT: ${process.env.NODE_ENV}`);

// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: "too many requests from this IP, pls try again after an hour",
// });
// app.use("/api", limiter); // applies ratelimiter on only /api routes

app.use(express.json());

app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);

// route error handler
app.all("*", (req, res, next) => {
  next(new AppError(`cant find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
