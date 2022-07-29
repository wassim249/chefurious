import { NewsLetter } from "./NewsLetter";
import { RecipesList } from "../RecipesList";
import { FC } from "react";

export const Content :FC = () => {
  return (
    <div className="px-12 mt-2  mb-8">
      <NewsLetter />
      <RecipesList />
    </div>
  );
};
