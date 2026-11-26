const mongoose = require("mongoose");

const eventSaveSchema = new mongoose.Schema(
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
    }
  },
  { timestamps: true },
);

const EventSave = mongoose.model("EventSave", eventSaveSchema);

module.exports = EventSave;
