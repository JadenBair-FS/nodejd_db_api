const express = require("express");
const router = express.Router();
const {
  getDirector,
  getDirectorById,
  createDirector,
  updateDirector,
  deleteDirector,
} = require("../../controllers/directorController");

router.get("/", getDirector);

router.get("/:id", getDirectorById);

router.post("/", createDirector);

router.put("/:id", updateDirector);

router.delete("/:id", deleteDirector);

// router.post("/", (req, res, next) => {
//   Director.find({ _id: req.body._id, name: req.body.name })
//     .exec()
//     .then((result) => {
//       if (result.length > 0) {
//         return res.status(406).json({
//           message: "Director is already in database",
//         });
//       }

//       Movie.find({ director: req.body.name })
//         .exec()
//         .then((result) => {
//           if (result.length === 0) {
//             return res.status(406).json({
//               message:
//                 req.body.name +
//                 " does not have any saved movies in the database.",
//             });
//           }

//           console.log("Found Movie: " + result);
//           const foundMovie = result.title;

//           console.log(foundMovie);
//           // Create and save the new director here
//           const newDirector = new Director({
//             _id: new mongoose.Types.ObjectId(),
//             movie: foundMovie,
//             name: req.body.name,
//           });

//           newDirector
//             .save()
//             .then((result) => {
//               res.status(200).json({
//                 message: "Director Saved",
//                 Director: {
//                   id: result._id,
//                   name: result.name,
//                   movie: result.movie,
//                 },
//               });
//             })
//             .catch((err) => {
//               res.status(500).json({
//                 error: {
//                   message: err.message,
//                 },
//               });
//             });
//         })
//         .catch((err) => {
//           console.error(err);
//           res.status(500).json({
//             error: {
//               message: err.message,
//             },
//           });
//         });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: {
//           message: "Director: " + req.body.name + " could not be saved",
//           details: err.message,
//         },
//       });
//     });
// });

// router.get("/:directorId", (req, res, next) => {
//   const directorId = req.params.directorId;
//   Director.findById(directorId)
//     .select("name _id")
//     .populate("movie")
//     .exec()
//     .then((director) => {
//       if (!director) {
//         console.log(director);
//         return res.status(404).json({
//           message: "Director Not Found",
//         });
//       }
//       res.status(201).json({
//         director: director,
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

// router.patch("/:directorId", (req, res, next) => {
//   const directorId = req.params.directorId;
//   res.json({
//     message: "Directors - PATCH",
//     id: directorId,
//   });
// });

// router.delete("/:directorId", (req, res, next) => {
//   const directorId = req.params.directorId;
//   Director.deleteOne({ _id: directorId })
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         message: "Director Deleted",
//         request: {
//           method: "GET",
//           url: "http://localhost:3000/directors/" + directorId,
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

module.exports = router;
