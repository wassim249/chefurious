import {Schema ,model, Model} from "mongoose";

const recipeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    title: {
      type: String,
      required: [true, "please add a title"],
      maxLength: 30,
      minLength: 5,
    },
    ingredients: {
      type: String,
      required: [true, "Please add an ingredients"],
      minLength: 20,
      maxLength: 100,
    },
    duration: {
      type: Number,
      maximum: 43200,
      minimum: 60,
      required: [true, "please add a duration"],
    },
    calories: {
      type: Number,
      maximum: 2000,
      minimum: 10,
      required: [true, "please add a calories"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "intermediate", "expert"],
      required: [true, "please add a difficulty"],
    },
  },
  {
    timestamps: true,
  }
);


const Recipes = model("recipes", recipeSchema);
module.exports.Recipes = Recipes
