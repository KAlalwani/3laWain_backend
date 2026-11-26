const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    oneEvent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },
    activities: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity',
      required: true
    }],
    descriptions:{
        type: [String]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    }
  },
  { timestamps: true },
);

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
