import React, { useReducer } from "react";
import Context from "./Context";
import Memo from "./Memo";

const value = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return value;
    default:
      return state;
  }
};
function DoubleCounter() {
  const [count, dispatch] = useReducer(reducer, value);
  const [count2, dispatch2] = useReducer(reducer, value);
  return (
    <>
      <div>
        <h1>DoubleCounter : {count}</h1>

        <button onClick={() => dispatch("inc")}>Inc</button>
        <button onClick={() => dispatch("dec")}>Dec</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
        <p>--------------------------</p>
        <h1>DoubleCounter: {count2}</h1>
        <button onClick={() => dispatch2("inc")}>Inc</button>
        <button onClick={() => dispatch2("dec")}>Dec</button>
        <button onClick={() => dispatch2("reset")}>Reset</button>
      </div>
      {/* <Context /> */}
      <Memo />
    </>
  );
}

export default DoubleCounter;
