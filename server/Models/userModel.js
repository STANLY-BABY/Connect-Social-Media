import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique:true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      unique:true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAllowed: {
      type: Boolean,
      default: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      // required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    Realtionship: {
      type: String,
    },
    location: {
      type: String,
    },
    profilepic: {
      type: String,
    },
    coverpic: {
      type: String,
    },
    bio: {
      type: String,
    },
    following: [],
    followers: [],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", userSchema);
export default UserModel;
