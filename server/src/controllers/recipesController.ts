const expressAsyncHandler = require("express-async-handler");
import Joi , {ValidationError, ValidationResult} from "joi";
const { Recipes } = require("../models/Recipe");
const { Users } = require("../models/Users");
import { Request, Response } from "express";

const validateRecipe = (recipe: any) : ValidationResult<any> => {
  const schema = Joi.object({
    user: Joi.object(),
    title: Joi.string().min(5).max(30).required(),
    ingredients: Joi.string().min(20).max(100).required(),
    duration: Joi.number().integer().min(60).max(43200).required(),
    calories: Joi.number().min(10).max(2000),
    difficulty: Joi.string().valid("easy", "intermediate", "expert").required(),
  });

  return schema.validate(recipe);
};

exports.getRecipes = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const recipes : Array<Object> | null = await Recipes.find();
    res.status(200).json(recipes);
  }
);

exports.getMyRecipes = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const recipes : Array<Object> | null = await Recipes.find({ user: req.body.user.id });
    res.status(200).json(recipes);
  }
);

exports.getRecipe = expressAsyncHandler(async (req : Request , res : Response)=> {
  const id : string = req.params.id
  const recipe : Object | null = await Recipes.findById(id)

  if (!recipe) {
    res.status(400);
    throw new Error("Recipe not found");
  }

  res.status(200).json(recipe)
})

exports.postRecipe = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const validation : ValidationError |undefined  = validateRecipe(req.body).error;
    if (validation) {
      res.status(500);
      throw new Error(validation.message);
    }
    const userRecipe = { ...req.body, user: req.body.user };
    const recipe : Object = await Recipes.create(userRecipe);

    res.status(200).json(recipe);
  }
);

exports.putRecipe = expressAsyncHandler(async (req: Request, res: Response) => {
  const validation : ValidationError | undefined = validateRecipe(req.body).error;
  if (validation) {
    res.status(500);
    throw new Error(validation.message);
  }

  //  Check if logged in user exists
  const user = await Users.findById(req.body.user._id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const recipe = await Recipes.findOne({
    _id: req.params.id,
  });
  if (!recipe) {
    res.status(400);
    throw new Error("Recipe not found");
  }

  // Check if the logged in user matches the recipe user
  if (recipe.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedRecipe = await Recipes.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedRecipe);
});

exports.deleteRecipe = expressAsyncHandler(
  async (req: Request, res: Response) => {
    //  Check if logged in user exists
    const user = await Users.findById(req.body.user);
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    const recipe = await Recipes.findById(req.params.id);
    if (!recipe) {
      res.status(400);
      throw new Error("Recipe not found");
    }

    // Check if the logged in user matches the recipe user
    if (recipe.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    if (!recipe) {
      res.status(400);
      throw new Error("Recipe not found");
    }
    const deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedRecipe);
  }
);
