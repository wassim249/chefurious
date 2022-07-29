import { Logo } from "../components/Logo";
import bg from "../assets/images/loginbg.png";
import { Footer } from "../components/Footer";
import { BsArrowLeft } from "react-icons/bs";
import RegisterForm from "../components/Register/RegisterForm";
import { Link } from "react-router-dom";
import { FC } from "react";

export const Register :FC = () => {
  return (
    <>
      <main className="w-full h-full flex justify-end  overflow-hidden">
        <div className="p-6 w-full lg:w-1/2 h-auto">
          <div className="flex justify-between items-center">
            <Logo />
            <Link to="/">
            <BsArrowLeft size={20} />
            </Link>
          </div>

          <h1 className="mt-6 font-philosopher font-bold text-darkBlue text-h1">Sign up</h1>
          <p className="mb-5 font-openSans text-sm text-darkBlue">
            Create a new account to access to full functionnalities
          </p>
          <RegisterForm />
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-1/2 h-auto  hidden lg:block"
        ></div>
      </main>
      <Footer />
    </>
  );
};
