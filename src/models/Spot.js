const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
  },

  company: {
    type: String,
    required: true
  },

  price: {
    type: Number
  },

  techs: {
    type: [String]
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }

});

module.exports = mongoose.model("Spot", SpotSchema);