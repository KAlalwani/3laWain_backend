const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    locations:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    }],
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    startTime:{
        type: String,
        required: true
    },
    endTime:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min:0
    },
    activities:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity',
        required: true
    }],
    accommodations:{
        type:[String],
        required: true
    },
    photo:{
        type:[String],
        required: true
    }
  },
  { timestamps: true },
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
