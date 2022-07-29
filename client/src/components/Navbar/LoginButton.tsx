import { FC } from "react";

type LoginButtonProps = {
  className?: string;
  iconSize?: number;
};

export const LoginButton: FC<LoginButtonProps> = ({
  className = "",
}: LoginButtonProps) => (
  <div>
    <button className={"flex items-center bg-orange rounded-full px-10 py-2 " + className}>
      <span
        className={"font-openSSans text-white text-md ml-1 " + className}
      >
        Login
      </span>
    </button>
  </div>
);
