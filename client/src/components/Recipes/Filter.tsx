import { ChangeEvent, useReducer } from "react";
import { Rating } from "../RecipeCard/Rating";
import { Seperator } from "../Seperator";

enum ACTION_TYPE_ENUM {
  CHANGE_DIFFICULTY = "CHANGE_DIFFICULTY",
  CHANGE_CALORIES = "CHANGE_CALORIES",
  CLEAR_ALL = "CLEAR_ALL",
}

type ACTION_TYPE = {
  type: ACTION_TYPE_ENUM;
  payload: any | undefined;
};

type FILTER_STATE = {
  difficulty: {
    easy: boolean;
    medium: boolean;
    hard: boolean;
  };
  rating: number | null;
  calories: {
    from: number;
    to: number;
  };
};

export const Filter = () => {
  const reducer = (state: FILTER_STATE, action: ACTION_TYPE) => {
    switch (action.type) {
      case ACTION_TYPE_ENUM.CHANGE_DIFFICULTY:
        return {
          ...state,
          difficulty: {
            ...state.difficulty,
            ...action.payload,
          },
        };
      case ACTION_TYPE_ENUM.CHANGE_CALORIES:
        return {
          ...state,
          calories: {
            ...state.calories,
            ...action.payload,
          },
        };
      case ACTION_TYPE_ENUM.CLEAR_ALL:
        return {
          difficulty: {
            easy: false,
            medium: false,
            hard: false,
          },
          rating: null,
          calories: {
            from: 0,
            to: 0,
          },
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    difficulty: {
      easy: false,
      medium: false,
      hard: false,
    },
    rating: null,
    calories: {
      from: 0,
      to: 0,
    },
  });

  return (
    <div className="w-1/5 min-h-fit shadow-md border bg-slate-50 flex-col p-2 h-full hidden lg:flex">
      <div className="flex items-center justify-between">
        <h1 className="text-md font-bold text-darkBlue">Filter</h1>
        <span
          className="text-small cursor-pointer text-green uppercase hover:underline"
          onClick={() => {
            dispatch({ type: ACTION_TYPE_ENUM.CLEAR_ALL, payload: undefined });
          }}
        >
          Clear all
        </span>
      </div>
      <Seperator />
      {/* DIFFICULTY */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-darkBlue">Difficulty :</h2>
          <span
            onClick={() => {
              dispatch({
                type: ACTION_TYPE_ENUM.CHANGE_DIFFICULTY,
                payload: {},
              });
            }}
            className="text-small cursor-pointer text-slate-500 uppercase hover:underline"
          >
            X
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            id="difficulty-easy"
            name="difficulty"
            value="easy"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: ACTION_TYPE_ENUM.CHANGE_DIFFICULTY,
                payload: {
                  easy: e.target.checked,
                },
              });
            }}
            checked={state.difficulty.easy}
            className="mr-2 rounded-full "
          />
          <label className="cursor-pointer text-sm">Easy</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="difficulty-easy"
            name="difficulty"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: ACTION_TYPE_ENUM.CHANGE_DIFFICULTY,
                payload: {
                  medium: e.target.checked,
                },
              });
            }}
            checked={state.difficulty.medium}
            value="easy"
            className="mr-2 rounded-full"
          />
          <label className="cursor-pointer text-sm">Medium</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="difficulty-easy"
            name="difficulty"
            value="easy"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: ACTION_TYPE_ENUM.CHANGE_DIFFICULTY,
                payload: {
                  hard: e.target.checked,
                },
              });
            }}
            checked={state.difficulty.hard}
            className="mr-2 rounded-full"
          />
          <label className="cursor-pointer text-sm">Hard</label>
        </div>
      </div>
      {/* END DIFFICULTY */}

      {/* CALORIES */}
      <div>
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-sm font-bold text-darkBlue">Calories</h2>
          <span
            onClick={() =>
              dispatch({
                type: ACTION_TYPE_ENUM.CHANGE_CALORIES,
                payload: {
                  to: 0,
                  from: 0,
                },
              })
            }
            className="text-small cursor-pointer text-slate-500 uppercase hover:underline"
          >
            X
          </span>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="number"
            className="w-1/2 mr-2"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: ACTION_TYPE_ENUM.CHANGE_CALORIES,
                payload: {
                  from: parseInt(e.target.value),
                },
              });
            }}
            value={state.calories.from}
            placeholder="FROM..."
          />
          <input
            type="number"
            className="w-1/2 ml-2"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: ACTION_TYPE_ENUM.CHANGE_CALORIES,
                payload: {
                  to: parseInt(e.target.value),
                },
              });
            }}
            value={state.calories.to}
            placeholder="TO..."
          />
        </div>
      </div>
      {/* END CALORIES */}
      {/* RATING */}
      <div>
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-sm font-bold text-darkBlue">Rating</h2>
          <span className="text-small cursor-pointer text-slate-500 uppercase hover:underline">
            X
          </span>
        </div>
        {/* TEMPORARY */}
        {/* TODO : clickable rating */}
        <Rating rating={4} />
      </div>
      {/* END RATING */}
      <div className="grow relative">
        {" "}
        <button className="w-full bg-darkBlue text-white text-sm font-bold py-2 px-4 rounded-full mt-3 absolute bottom-3">
          Apply Filter
        </button>
      </div>
    </div>
  );
};
