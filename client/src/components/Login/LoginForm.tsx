import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/user";
import { setCookie } from "../../utils";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rememeberMeRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false);
  const INPUT_CLASSNAME: string =
    "block mt-2 p-2 font-openSans text-sm w-full  border rounded-lg border-gray-300 focus:outline-orange ";

  const validateInputs = (): boolean => {
    if (!emailRef.current?.value?.length) {
      // TODO : display error message
      alert("Email is required");
      return false;
    }
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!emailRegex.test(emailRef.current?.value)) {
      // TODO : display error message
      return false;
    }
    if (!passwordRef.current?.value?.length) {
      // TODO : display error message
      alert("Password is required");
      return false;
    }
    return true;
  };

  const signUp = async (): Promise<void> => {
    if (validateInputs()) {
      setLoading(true);
      const response = await login({
        // @ts-ignore
        email: emailRef.current?.value,
        // @ts-ignore
        password: passwordRef.current?.value,
      });
      setLoading(false);
      if (!response) {
        alert("Unknown error occured");
        return;
      }
      // check if status code is 200
      if (response.status === 200) {
        // TODO : display success message
        alert("Login success");
        if(rememeberMeRef.current?.checked){
          setCookie("token", response.data.token);
        }
        navigate("/");
      } else if (response.status === 400) {
        alert(response.data.message);
      }
    }
  };

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="block w-full font-openSans text-sm font-bold ">
        Email adress :
      </label>
      <input
        type="email"
        ref={emailRef}
        placeholder="Enter your email adress"
        className={`${INPUT_CLASSNAME} mb-10 `}
      />

      <div className=" flex justify-between  w-full ">
        <label className="w-full font-openSans text-sm font-bold ">
          Password :
        </label>
        <a
          href="/"
          className="w-1/2 text-right text-sm font-bold text-darkBlue hover:underline"
        >
          Forgot password ?
        </a>
      </div>
      <input
        type="password"
        ref={passwordRef}
        placeholder="Enter your password"
        className={INPUT_CLASSNAME}
      />

      <div className="mt-5">
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          ref={rememeberMeRef}
        />
        <label className="ml-1 font-openSans text-sm text-darkBlue">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();

          signUp();
        }}
        className="block mt-10 mb-2 bg-orange rounded-full text-center  w-full  py-3 uppercase font-bold text-white transition duration-500 ease-in-out"
      >
        {loading ? '...' : "Sign in"}
      </button>
      <span className="block text-sm">
        New User?&nbsp;
        <a
          href="/register"
          className=" text-orange font-bold hover:text-darkBlue hover:underline"
        >
          Sign up ?
        </a>
      </span>
    </form>
  );
};

export default LoginForm;
