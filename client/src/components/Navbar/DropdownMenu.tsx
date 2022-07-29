import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { LoginButton } from "./LoginButton";

type DropDownMenuProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  }
  
 export const DropDownMenu = ({ isOpen, setIsOpen } : DropDownMenuProps) => {
    useEffect(() => {
      window.onscroll = () => {
        window.scrollTo(0, 0);
      };
      return () => {
        window.onscroll = () => {};
      };
    }, []);
    return (
      <div className="bg-orange p-6 w-full h-full z-10 flex flex-col justify-between items-center  absolute">
        <div className="w-full flex justify-end items-center">
          <button className="font-extrabold text-2xl ">
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/"
            className="font-openSans text-3xl font-semibold text-white mb-5 underline"
          >
            Home
          </Link>
          <Link
            to="/"
            className=" font-openSans text-3xl font-semibold text-white mb-5  hover:underline transition duration-500 ease-in-out"
          >
            Recipes
          </Link>
          <Link
            to="/"
            className=" font-openSans text-3xl font-semibold text-white mb-5  hover:underline transition duration-500 ease-in-out"
          >
            Categories
          </Link>
        </div>
        <div>
          <LoginButton className="text-white font-bold text-xl" iconSize={25} />
        </div>
      </div>
    );
  };