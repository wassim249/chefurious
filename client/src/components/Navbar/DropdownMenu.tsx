import { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { User } from "../../types/user";
import { HamburgerMenu } from "./HamburgerMenu";
import { LoginButton } from "./LoginButton";

type DropDownMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  user: User | null | undefined;
  logout: (() => void) | undefined;
};

export const DropDownMenu = ({
  isOpen,
  setIsOpen,
  user,
  logout,
}: DropDownMenuProps) => {
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
        {user?._id ? (
          <div className="flex items-center justify-between w-44">
            <IoMdPerson color="#F97316" />
            {`${user?.firstName} ${user?.lastName}`}
            <div
              className="rounded-full bg-white p-2 cursor-pointer"
              onClick={() => logout?.()}
            >
              <BiLogOut color="#F97316" />
            </div>
          </div>
        ) : (
          <LoginButton className="text-white font-bold text-xl" iconSize={25} />
        )}
      </div>
    </div>
  );
};
