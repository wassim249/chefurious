import { useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="bg-white flex items-center justify-between rounded-full">
      <select className=" bg-white border-none rounded-full focus:outline-none text-center">
        <option value="">All</option>
        <option value="">Breakfast</option>
        <option value="">Lunch</option>
        <option value="">Dinner</option>
        <option value="">Dessert</option>
      </select>
      <div className="flex items-center grow">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="grow bg-white border-none rounded-lg py-2 px-4 mr-4 leading-tight focus:outline-none "
        />
        <span
          className="px-6 cursor-pointer"
          onClick={() => {
            setSearch("");
          }}
        >
          X
        </span>
      </div>
      <button className="bg-green text-white border-none rounded-lg py-2 px-4 leading-tight focus:outline-none ">
        Search
      </button>
    </div>
  );
};
