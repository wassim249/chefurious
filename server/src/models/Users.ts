import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "please add a first name"],
      maxLength: 50,
      minLength: 1,
    },

    lastName: {
      type: String,
      required: [true, "please add a last name"],
      maxLength: 50,
      minLength: 1,
    },

    bio: {
      type: String,
      maxLength: 200,
      minLength: 10,
    },

    email: {
      type: String,
      required: [true, "please add an email"],
      maxLength: 50,
      minLength: 10,
    },

    password: {
      type: String,
      required: [true, "please add a password"],
    },
  },
  {
    timestamps: true,
  }
)

module.exports.Users = mongoose.model(
  "Users",
 userSchema
);
