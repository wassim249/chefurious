import { FC } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export const Hero: FC = () => {
  return (
    <div className="h-[50vh] md:h-screen px-12 md:pt-32 flex flex-col justify-start md:justify-center">
      <h1 className="font-philosopher font-bold text-darkBlue text-5xl md:text-7xl font-justify max-w-sm mt-24 md:mt-0">
        Tasty recipes from the community.
      </h1>
      <Link
        to="/login"
        className="mt-4 w-52 text-center rounded-full text-white font-openSans px-8 py-2 bg-orange transition duration-500"
      >
        Explore
      </Link>
      <div className=" justify-center items-center grow animate-pulse hidden md:flex">
        <IoIosArrowDropdownCircle size={30} color="#fdba74" />
      </div>
    </div>
  );
};
