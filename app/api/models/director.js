const mongoose = require("mongoose");

const directorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, "Please add the Director name"],
    unique: true,
  },
  movie:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
});

module.exports = mongoose.model("Director", directorSchema);
