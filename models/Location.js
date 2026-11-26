const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    gps: {
      type: String,
      required: true
    },
    instruction: {
      type: [String],
    }
  },
  { timestamps: true },
);

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
