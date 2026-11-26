const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    menu: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true,
      },
    ],
    photo: {
      type: [String],
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
