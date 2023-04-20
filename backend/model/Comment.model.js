const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  
  { timestamps: true }
);

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = {
  CommentModel,
};
