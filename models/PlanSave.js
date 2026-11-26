const mongoose = require("mongoose");

const planSaveSchema = new mongoose.Schema(
  {
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
      required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  },
  { timestamps: true },
);

const PlanSave = mongoose.model("PlanSave", planSaveSchema);

module.exports = PlanSave;
