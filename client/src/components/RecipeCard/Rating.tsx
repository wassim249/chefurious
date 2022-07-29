import { FC, ReactElement } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

type RatingProps = {
  rating: number;
};

export const Rating: FC<RatingProps> = ({ rating }: RatingProps) => {
  const stars: Array<ReactElement> = [];
  while (rating > 0) {
    if (rating - 1 < 0) stars.push(<BsStarHalf color="orange" size={15} />);
    else stars.push(<AiFillStar color="orange" size={16} />);
    rating -= 1;
  }
  let counter: number = 5 - stars.length;
  while (counter !== 0) {
    stars.push(<AiOutlineStar color="orange" size={15} />);
    counter--;
  }

  return (
    <div className="flex">
      {stars.map((s, key) => (
        <span key={key}>{s}</span>
      ))}
    </div>
  );
};
