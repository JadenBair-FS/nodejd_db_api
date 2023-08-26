const express = require("express");
const app = express();
const morgan = require("morgan");
const directorRoutes = require("./api/routes/directors");
const movieRoutes = require("./api/routes/movies");
require("dotenv").config();

//middleware for logging
app.use(morgan("dev"));
// parsing
app.use(express.urlencoded({ extended: true }));
// middleware that all requests are json
app.use(express.json());
// middleware to handle the CORS policy
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, PATCH, DELTE");
  }
  next();
});

// http://localhost:3000
app.get("/", (req, res, next) => {
  res.status(201).json({ message: "Service is up!", method: req.method });
});

//routes
app.use("/directors", directorRoutes);
app.use("/movies", movieRoutes);

// add middleware to handle errors and bad url paths
app.use((req, res, next) => {
  const error = new Error("NOT FOUND");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.staus || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

module.exports = app;
