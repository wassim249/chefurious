import { useState } from "react";
import { RecipeCard } from "../RecipeCard";
import { Filter } from "./Filter";
import { SearchBar } from "./SearchBar";

export const Content = () => {
  const [topRecipes] = useState([
    {
      imgUrl:
        "https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg",
      title: "Hot BBQ with tomato sauce and paprika",
      ingredients:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      duration: "5000",
      calories: "500",
      level: "easy",
      rating: 1,
    },

    {
      imgUrl:
        "https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg",
      title: "Hot BBQ with tomato sauce and paprika",
      ingredients:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      duration: "8000",
      calories: "1077",
      level: "medium",
      rating: 4,
    },
  ]);
  return (
    <div className="h-[50vh] md:h-screen px-12 md:pt-24 pb-16 flex bg-slate-50">
      <Filter />
      <div className=" w-full ml-12">
        <SearchBar />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mt-8">
          {topRecipes.map((recipe, key) => (
            <RecipeCard recipe={recipe} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};
