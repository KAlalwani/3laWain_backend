const mongoose = require("mongoose");

const eventStarsSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      required: true,
    },
    stars:{
        type: Number,
        min: 0,
        max: 5,
        required: true
    }
  },
  { timestamps: true },
);

const EventStars = mongoose.model("EventStars", eventStarsSchema);

module.exports = EventStars;
