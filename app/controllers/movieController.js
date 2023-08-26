const Movie = require("../api/models/movie");
const messages = require("../../messages/messages");

const getMovie = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      data: movies,
      status: messages.success,
      message: req.method + messages.movie_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json({
      data: movie,
      status: messages.success,
      message: req.method + messages.movie_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

const createMovie = async (req, res) => {
  try {
    const { movie } = req.body;
    const newMovie = await Movie.create(movie);
    res.status(200).json({
      data: newMovie,
      status: messages.success,
      message: req.method + messages.movie_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      data: movie,
      status: messages.success,
      message: req.method + messages.movie_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.status(200).json({
      id,
      status: messages.success,
      message: req.method + messages.movie_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

module.exports = {
  getMovie,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
