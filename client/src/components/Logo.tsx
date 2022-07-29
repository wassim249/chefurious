import { FC } from "react";
import { SiCodechef } from "react-icons/si";

export const Logo :FC = () => (
    <a href="/" className="flex items-center">
      <SiCodechef color="#F97316" size={25} />
      <span className="font-openSans font-bold text-darkBlue text-md ml-1">
        Chefurious
      </span>
    </a>
  );