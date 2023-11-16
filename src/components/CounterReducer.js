import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
      break;
    case "dec":
      return state - 1;
      break;
    case "reset":
      return initialValue;
      break;
    default:
      return state;
  }
};

function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <div>
        <h1>Count : {count}</h1>
        <button onClick={() => dispatch("inc")}>Inc</button>
        <button onClick={() => dispatch("dec")}>Dec</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </>
  );
}

export default CounterReducer;
