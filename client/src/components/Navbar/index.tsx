import { useEffect, useState ,FC } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { LoginButton } from "./LoginButton";
import { HamburgerMenu } from "./HamburgerMenu";
import { DropDownMenu } from "./DropdownMenu";


export const NavBar : FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY !== 0)
        document.getElementById("nav")?.classList.add("bg-white");
      else document.getElementById("nav")?.classList.remove("bg-white");
    }
    );
    window.addEventListener('resize',(e)=> {
      if(window.innerWidth >= 768)
          setIsOpen(false)
    })
  }, []);
  return (
    <>
      <nav
        id="nav"
        className="w-screen px-10 py-6 flex  justify-between items-center fixed transition duration-500 ease-in"
      >
        <div className="w-1/2 flex justify-between items-center"> <Logo />
        <div className=" w-80 justify-between items-center hidden md:flex">
          <Link
            to="/"
            className=" font-openSans text-sm font-semibold text-orange"
          >
            Home
          </Link>
          <Link
            to="/"
            className=" font-openSans text-sm font-semibold text-darkBlue"
          >
            Recipes
          </Link>
          <Link
            to="/"
            className=" font-openSans text-sm font-semibold text-darkBlue"
          >
            Categories
          </Link>
        </div></div>
       
        <HamburgerMenu
          className="block md:hidden"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div className="hidden md:block">
          <LoginButton />
        </div>
      </nav>
      {isOpen && <DropDownMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
