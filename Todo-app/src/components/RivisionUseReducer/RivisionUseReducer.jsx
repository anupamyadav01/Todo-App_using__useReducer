import { useState } from "react";
import { useReducer } from "react";

const RivisionUseReducer = () => {
  const [userInput, setUserInput] = useState(1);

  const reducer = (state, action) => {
    console.log(state);

    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + action.payload };
      case "DECREMENT":
        return { ...state, count: state.count - action.payload };
      case "RESET":
        return { count: 0 };
      case "CHANGE_NAME":
        return {
          ...state,
          user: {
            name: "Changed Name",
          },
        };
    }
  };

  const increment = () => {
    dispatch({
      type: "INCREMENT",
      payload: userInput,
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
      payload: userInput,
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
      payload: userInput,
    });
  };

  const changeName = () => {
    dispatch({
      type: "CHANGE_NAME",
    });
  };

  const initialState = {
    count: 0,
    user: {
      name: "Anupam",
      age: 23,
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Rivision UseReducer</h1>
      <h1>
        My Name is {state.user.name} and my age is {state.user.age}
      </h1>
      <p className="text-4xl">{state.count}</p>
      <input
        type="text"
        value={userInput}
        className="border-2 border-zinc-300"
        onChange={(e) => setUserInput(+e.target.value)}
      />
      <button
        onClick={increment}
        className="border-2 border-zinc-500 px-5 py-1 rounded mr-3"
      >
        Inc
      </button>
      <button
        onClick={decrement}
        className="border-2 border-zinc-500 px-5 py-1 rounded mr-3"
      >
        Dec
      </button>
      <button
        onClick={reset}
        className="border-2 border-zinc-500 px-5 py-1 rounded mr-3"
      >
        Reset
      </button>
      <div>
        <button
          onClick={changeName}
          className="border-2 border-zinc-500 px-5 py-1 rounded mr-3 bg-blue-500"
        >
          Change Name
        </button>
      </div>
    </div>
  );
};

export default RivisionUseReducer;
