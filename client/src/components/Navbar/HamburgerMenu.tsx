import { FC, ReactElement } from "react";
import { HiMenuAlt3, HiOutlineMenu } from "react-icons/hi";

type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
};

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
  className,
  isOpen,
  setIsOpen,
}: HamburgerMenuProps) => {
  const icon: ReactElement = isOpen ? (
    <HiMenuAlt3 size={20} />
  ) : (
    <div
    className="bg-darkBlue rounded-full p-2"
    > <HiOutlineMenu color="white" /></div>
   
  );
  return (
    <button className={className} onClick={() => setIsOpen(!isOpen)}>
      {icon}
    </button>
  );
};
