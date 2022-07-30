import { FC, RefObject, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/user";
import { UserCtx } from "../../contexts/userContext";
import { setCookie } from "../../utils";

const RegisterForm: FC = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserCtx);
  const firstNameRef: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const lastNameRef: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const emailRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const bioRef: RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);
  const passwordRef: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const confirmPasswordRef: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const INPUT_CLASSNAME: string =
    "block mt-2 p-2 font-openSans text-sm w-full  border rounded-lg border-gray-300 focus:outline-orange ";
  const LABEL_CLASSNAME: string =
    "block w-full font-openSans text-sm font-bold";

  const validateInputs = (): boolean => {
    // validate firstName
    if (!firstNameRef.current?.value?.length) {
      // TODO : display error message
      return false;
    }
    if (!lastNameRef.current?.value?.length) {
      // TODO : display error message
      return false;
    }

    if (!emailRef.current?.value?.length) {
      // TODO : display error message
      return false;
    }
    // validate email with regex
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!emailRegex.test(emailRef.current?.value)) {
      // TODO : display error message
      return false;
    }
    if (!bioRef.current?.value?.length) {
      // TODO : display error message
      return false;
    }
    if (!passwordRef.current?.value?.length) {
      // TODO : display error message
      return false;
    }
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      // TODO : display error message
      return false;
    }

    return true;
  };

  const signin = async (): Promise<void> => {
    if (validateInputs()) {
      const response = await register({
        // @ts-ignore
        firstName: firstNameRef.current?.value,
        // @ts-ignore
        lastName: lastNameRef.current?.value,
        // @ts-ignore
        email: emailRef.current?.value,
        // @ts-ignore
        bio: bioRef.current?.value,
        // @ts-ignore
        password: passwordRef.current?.value,
      });

      if (!response) {
        alert("Unknown error occured");
        return;
      }
      // check if status code is 200
      if (response.status === 201) {
        // TODO : display success message
        alert("Register success");
        
        setCookie("token", response.data.token);
       userContext?.setUser(response.data);
        navigate("/");
      } else if (response.status === 400) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    }
  };

  return (
    <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <div className="col-span-2 md:col-span-1">
        <label className={LABEL_CLASSNAME}>
          First name :<span className="text-red-500">&nbsp;*</span>
        </label>
        <input
          type="text"
          ref={firstNameRef}
          placeholder="Enter your first name"
          className={INPUT_CLASSNAME + "mb-4"}
        />
      </div>

      <div className="col-span-2 md:col-span-1">
        <label className={LABEL_CLASSNAME}>
          Last name :<span className="text-red-500">&nbsp;*</span>
        </label>
        <input
          type="text"
          ref={lastNameRef}
          placeholder="Enter your last name"
          className={INPUT_CLASSNAME}
        />
      </div>

      <div className=" col-span-2">
        <label className={LABEL_CLASSNAME}>
          Email adress :<span className="text-red-500">&nbsp;*</span>
        </label>
        <input
          type="email"
          ref={emailRef}
          placeholder="Enter your email adress"
          className={INPUT_CLASSNAME + "mb-4"}
        />
      </div>

      <div className="col-span-2">
        <label className={LABEL_CLASSNAME}>Bio :</label>
        <textarea
          placeholder="Enter your Bio"
          ref={bioRef}
          className={INPUT_CLASSNAME + "mb-4"}
        ></textarea>
      </div>

      <div className="col-span-2 md:col-span-1">
        <label className={LABEL_CLASSNAME}>
          Password :<span className="text-red-500">&nbsp;*</span>
        </label>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
          className={INPUT_CLASSNAME}
        />
      </div>

      <div className="col-span-2 md:col-span-1">
        <label className={LABEL_CLASSNAME}>
          Password confirmation :<span className="text-red-500">&nbsp;*</span>
        </label>
        <input
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm your password"
          className={INPUT_CLASSNAME}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          signin();
        }}
        type="submit"
        className="block col-span-2 mt-3 mb-2 w-full py-3 uppercase font-bold text-white rounded-full bg-orange transition duration-500 ease-in-out"
      >
        Sign in
      </button>
      <span className="block">
        Already have an account ?&nbsp;
        <a
          href="/"
          className=" text-orange font-bold hover:text-darkBlue hover:underline"
        >
          Sign in?
        </a>
      </span>
    </form>
  );
};

export default RegisterForm;
