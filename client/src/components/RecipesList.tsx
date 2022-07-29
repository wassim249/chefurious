import { useState } from "react";
import { RecipeCard } from "./RecipeCard/index";

export const RecipesList = () => {
  const [topRecipes] = useState([
    {
      imgUrl: 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
      title: "Hot BBQ with tomato sauce and paprika",
      ingredients:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      duration: "5000",
      calories: "500",
      level: "easy",
      rating: 1,
    },

    {
      imgUrl: 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
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
    <div>
      <h1 className="font-philosopher font-extrabold text-darkBlue text-5xl mt-10 text-center">Top recipes</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 mt-8">
        {topRecipes.map((recipe, key) => (
          <RecipeCard recipe={recipe} key={key} />
        ))}
      </div>
    </div>
  );
};
