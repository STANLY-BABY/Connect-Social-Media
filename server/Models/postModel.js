import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    likes: [],
    comment: [],
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Post", postSchema);
export default PostModel;

