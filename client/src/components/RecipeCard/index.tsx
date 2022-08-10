import { AiFillFire } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { Rating } from "./Rating";
import { RecipeTag } from "./RecipeTag";

type RecipeCardProps = {
  recipe: any;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const millisToMinutes = (millis: number): number =>
    parseInt(`${millis / 60}`);

  return (
    <div className="shadow-lg bg-white rounded-lg hover:scale-105 transition-all duration-200 ease-in-out ">
      <img src={recipe.imgUrl} className="w-full rounded-lg" alt="" />

      <h3 className="font-philosopher font-black text-xl md:text-sm truncate text-darkBlue px-3 mt-3">
        {recipe.title}
      </h3>
      <div className="flex items-center justify-between my-2 p-3">
        <RecipeTag
          Icon={BsClock}
          text={`${millisToMinutes(recipe.duration)} min`}
          color="blue"
        />
        <RecipeTag
          Icon={GiProgression}
          text={`${recipe.level}`}
          color="emerald"
        />
        <RecipeTag
          Icon={AiFillFire}
          text={`${recipe.calories} kcal`}
          color="red"
        />
      </div>
      <div className="flex justify-between items-center mt-3 p-3">
        <Rating rating={recipe.rating} />
        <a
          href="/"
          className=" bg-orange text-white rounded-full px-4 py-1 font-black text-sm"
        >
          <BiDotsHorizontalRounded />
        </a>
      </div>
    </div>
  );
};
