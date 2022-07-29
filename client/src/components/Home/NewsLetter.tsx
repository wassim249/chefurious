import { FC } from "react";

export const NewsLetter : FC = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-darkBlue p-4 flex flex-col md:flex-row flex-wrap items-left md:items-center justify-between w-full md:w-4/5 mt-4">
        <span className="font-philosopher mb-4 md:mb-0 text-white text-xl">
          Get a recipe every day !
        </span>
        <div className="">
          <input
            type="email"
            placeholder="Your email"
            className="p-1 mr-2 h-10 font-openSans w-full md:w-52 mb-4 md:mb-0"
          />
          <input
            type="text"
            placeholder="Your name"
            className="p-1 h-10 font-openSans w-full md:w-52 "
          />
        </div>

        <button className="bg-orange text-white px-6 py-2 mt-3 md:mt-0 uppercase font-bold w-full md:w-40 ">
          subscribe
        </button>
      </div>
    </div>
  );
};
