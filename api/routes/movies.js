const express = require("express");
const Movie = require("../models/movie");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  res.json({
    message: "Movies - GET",
  });
});
router.post("/", (req, res, next) => {
  const newMovie = new Movie({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    director: req.body.director,
  });

  newMovie
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Movie Saved",
        movie: {
          title: result.title,
          director: result.director,
          id: result._id,
          metadata: {
            method: req.method,
            host: req.hostname,
          },
        },
      });
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});
router.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  res.json({
    message: "Movies - GET",
    id: movieId,
  });
});
router.patch("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const updatedMovie = {
    title: req.body.title,
    author: req.body.director,
  };

  Book.updateOne(
    {
      _id: movieId,
    },
    {
      $set: updatedMovie,
    }
  )
    .then((result) => {
      res.status(200).json({
        message: "Updated Movie",
        book: {
          title: result.title,
          author: result.director,
          id: result._id,
        },
        metadata: {
          host: req.hostname,
          method: req.method,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});
router.delete("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  res.json({
    message: "Movie - DELETE",
    id: movieId,
  });
});

module.exports = router;
