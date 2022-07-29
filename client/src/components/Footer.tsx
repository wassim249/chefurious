import { FC } from "react";

export const Footer :FC = () => {
  return (
    <footer className="p-4 shadow bg-darkBlue text-center">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} &nbsp;
        <a href="/" className="hover:underline">
          Chefurious
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
