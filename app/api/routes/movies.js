const express = require("express");
const router = express.Router();
const {
  getMovie,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../../controllers/movieController");

router.get("/", getMovie);

router.get("/:id", getMovieById);

router.post("/", createMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

module.exports = router;


// const express = require("express");
// const Movie = require("../models/movie");
// const router = express.Router();
// const mongoose = require("mongoose");

// router.get("/", (req, res, next) => {
//   Movie.find({})
//     .then((result) => {
//       console.log(result);
//       res.status(200).json({
//         message: "All movies",
//         movies: {
//           result,
//         },
//       });
//     })
//     .catch((err) => {
//       console.error(err.message);
//       res.status(500).json({
//         error: {
//           message: err.message,
//         },
//       });
//     });
// });
// router.post("/", (req, res, next) => {
//   Movie.find({
//     title: req.body.title,
//     director: req.body.director,
//   })
//     .exec()
//     .then((result) => {
//       console.log(result);
//       if (result.length > 0) {
//         return res.status(406).json({
//           message: "Movie is already in the database",
//         });
//       }

//       const newMovie = new Movie({
//         _id: new mongoose.Types.ObjectId(),
//         title: req.body.title,
//         director: req.body.director,
//       });

//       newMovie.save().then((result) => {
//         console.log(result);
//         res.status(200).json({
//           message: "Movie Saved",
//           movie: {
//             title: result.title,
//             director: result.director,
//             id: result._id,
//             metadata: {
//               method: req.method,
//               host: req.hostname,
//             },
//           },
//         });
//       });
//     })
//     .catch((err) => {
//       console.error(err.message);
//       res.status(500).json({
//         error: {
//           message: err.message,
//         },
//       });
//     })
// .catch((err) => {
//   console.error(error);
//   res.status(500).json({
//     error: {
//       message: `Unable to save movie with title` + req.body.title,
//     },
//   });
// });
// });

// router
//   .get("/:movieId", (req, res, next) => {
//     const movieId = req.params.movieId;
//     Movie.find({ _id: movieId })
//       .then((result) => {
//         console.log(result);
//         res.status(200).json({
//           message: "Selected movie",
//           movies: {
//             result,
//           },
//         });
//       })
//       .catch((err) => {
//         console.error(err.message);
//         res.status(500).json({
//           error: {
//             message: err.message,
//           },
//         });
//       });
//   })

// router.patch("/:movieId", (req, res, next) => {
//   const movieId = req.params.movieId;
//   const updatedMovie = {
//     title: req.body.title,
//     author: req.body.director,
//   };

//   Book.updateOne(
//     {
//       _id: movieId,
//     },
//     {
//       $set: updatedMovie,
//     }
//   )
//     .then((result) => {
//       res.status(200).json({
//         message: "Updated Movie",
//         book: {
//           title: result.title,
//           author: result.director,
//           id: result._id,
//         },
//         metadata: {
//           host: req.hostname,
//           method: req.method,
//         },
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: {
//           message: err.message,
//         },
//       });
//     });
// });
// router.delete("/:movieId", (req, res, next) => {
//   const movieId = req.params.movieId;
//   Movie.deleteOne({ _id: movieId })
//     .then((result) => {
//       res.status(200).json({
//         message: "Deleted Movie",
//         deleted: result,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: {
//           message: err.message,
//         },
//       });
//     });
// });

// module.exports = router;
