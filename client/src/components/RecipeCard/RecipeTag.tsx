import { FC } from "react";
import { IconType } from "react-icons";

type RecipeTagProps = {
    text : string;
    Icon : IconType
    color : string;
}

export const RecipeTag : FC<RecipeTagProps> = ({text, Icon , color} : RecipeTagProps) => {
    
    return (
    <div className={`rounded-full flex justify-between items-center py-1 px-4 md:px-2  bg-${color}-200`}>
    <Icon size={10} className="opacity-80" />
    <span className="ml-1 font-openSans font-semibold text-[.7rem] opacity-80">
      {text}
    </span>
  </div>
  )
}