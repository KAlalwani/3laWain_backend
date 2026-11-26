const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    activity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
      required: true,
    },
  },
  { timestamps: true },
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
