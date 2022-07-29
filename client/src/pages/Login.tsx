import { Logo } from "../components/Logo";
import bg from "../assets/images/loginbg.png";
import { Footer } from "../components/Footer";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import { FC } from "react";

export const Login :FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-full h-screen flex flex-col ">
        <div className="flex justify-end grow">
          <div className="p-6 w-full md:1/3 h-fit ">
            <div className="flex justify-between items-center">
              <Logo />
              <button onClick={() => navigate(-1)}>
                <BsArrowLeft size={20} />
              </button>
            </div>
            <h1 className="mt-10 font-philosopher font-bold text-darkBlue text-h1">Sign in</h1>
            <p className="mb-10 font-openSans text-sm text-darkBlue">
              Enter your credentials to access to your account
            </p>
            <LoginForm />
          </div>
          <div
            style={{
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className=" w-4/5 hidden md:block"
          ></div>
        </div>
        <Footer />
      </main>
    </>
  );
};
