import { User } from "./user";

export interface IRecipe {
  id: string;
  title: string;
  calories: number;
  duration: number;
  difficulty: RECIPE_DIFFICULTY;
  ingredients: Array<Ingredient>;
  description: string;
  user? : User
}

export enum RECIPE_DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Ingredient = {
  name: string;
  quantity: number;
};
