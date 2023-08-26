const Director = require("../api/models/director");
const messages = require("../../messages/messages")

const getDirector = async (req, res) => {
  try {
    const directors = await Director.find().select("name _id").populate('movie', 'title director');
    res.status(200).json({
      data: directors,
      status: messages.success,
      message: req.method + messages.director_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

const getDirectorById = async (req, res) => {
  try {
    const { id } = req.params;
    const director = await Director.findById(id).select("name _id").populate("movie");
    res.status(200).json({
      data: director,
      status: messages.success,
      message: req.method + messages.director_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

const createDirector = async (req, res) => {
  try {
    const { director } = req.body;
    const newDirector = await Director.create(director);
    res.status(200).json({
      data: newDirector,
      status: messages.success,
      message: req.method + messages.director_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

const updateDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const director = await Director.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      data: director,
      status: messages.success,
      message: req.method + messages.director_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

const deleteDirector = async (req, res) => {
  try {
    const { id } = req.params;
    await Director.findByIdAndDelete(id);
    res.status(200).json({
      id,
      status: messages.success,
      message: req.method + messages.director_request,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: messages.fail,
      message,
    });
  }
};

module.exports = {
  getDirector,
  getDirectorById,
  createDirector,
  updateDirector,
  deleteDirector,
};
