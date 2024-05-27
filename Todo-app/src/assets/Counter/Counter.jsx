import { useReducer, useState } from "react";

const Counter = () => {
  const reducerFunc = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "INCREMENT":
        console.log(state.count);
        return { count: state.count + action.payload };
      case "DECREMENT":
        console.log(state);
        return { count: state.count - action.payload };
      case "RESET":
        return { count: 0 };
    }
  };
  const [incDecByValue, setIncDecByValue] = useState(1);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: incDecByValue });
  };
  const handleDecrement = () =>
    dispatch({ type: "DECREMENT", payload: incDecByValue });

  const handleReset = () => dispatch({ type: "RESET" });

  //   const [counter, dispatch] = useReducer(reducerFunc, 0);
  const [state, dispatch] = useReducer(reducerFunc, {
    count: 0,
  });
  return (
    <div className="flex  flex-col justify-center items-center h-screen w-full">
      <h1 className="text-4xl font-bold">Counter App</h1>
      <input
        type="text"
        value={incDecByValue}
        placeholder="Enter the value..."
        className="px-3 py-2 border border-zinc-400 outline-none text-xl mt-5"
        onChange={(e) => setIncDecByValue(+e.target.value)}
      />
      <h2 className="my-5 text-6xl font-semibold">{state.count}</h2>
      <span className="flex gap-6">
        <button
          onClick={handleIncrement}
          className="border border-zinc-400 px-5 py-2 cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="border border-zinc-400 px-5 py-2 cursor-pointer"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="border border-zinc-400 px-5 py-2 cursor-pointer"
        >
          Reset
        </button>
      </span>
    </div>
  );
};

export default Counter;
