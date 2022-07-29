import { Schema , model, Model } from 'mongoose'
import { User } from '../types/user';

const userSchema : Schema<User> = new Schema(
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


export const Users : Model<User> = model<User>(
  "Users",
 userSchema
);
