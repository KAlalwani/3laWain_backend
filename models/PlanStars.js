const mongoose = require("mongoose");

const planStarsSchema = new mongoose.Schema(
  {
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
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

const PlanStars = mongoose.model("PlanStars", planStarsSchema);

module.exports = PlanStars;
