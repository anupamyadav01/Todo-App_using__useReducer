import { useReducer, useState } from "react";

const UseReducer = () => {
  const [userInput, setUserInput] = useState(1);
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + action.payload };
      case "DECREMENT":
        return { count: state.count - action.payload };
      case "RESET":
        return { count: 0 };
    }
  };

  const handleIncrement = () =>
    dispatch({ type: "INCREMENT", payload: userInput });
  const handleDecrement = () =>
    dispatch({ type: "DECREMENT", payload: userInput });
  const handleReset = () => dispatch({ type: "RESET", payload: userInput });

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="flex justify-center items-center text-center">
      <div>
        <div className="text-4xl font-bold">{state.count}</div>
        <input
          value={userInput}
          onChange={(e) => setUserInput(+e.target.value)}
          type="text"
          placeholder="Enter a number..."
          className="p-2 border border-zinc-500 mr-4 text-xl"
        />
        <button
          className="p-4 border border-zinc-700 mr-3"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="p-4 border border-zinc-700 mr-3"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="p-4 border border-zinc-700 mr-3"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
