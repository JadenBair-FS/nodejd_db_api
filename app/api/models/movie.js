const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  director: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
