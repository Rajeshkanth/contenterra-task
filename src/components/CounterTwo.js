import React, { useReducer } from "react";

const InitialVal = {
  num1: 0,
  num2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, num1: state.num1 + action.value };
    case "dec":
      return { ...state, num1: state.num1 - action.value };
    case "inc5":
      return { ...state, num1: state.num1 + action.value };
    case "dec5":
      return { ...state, num1: state.num1 - action.value };
    case "inc2":
      return { ...state, num2: state.num2 + action.value };
    case "dec2":
      return { ...state, num2: state.num2 - action.value };
    case "reset":
      return InitialVal;
    default:
      return state;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, InitialVal);
  return (
    <>
      <h1>
        CounterTwo: {count.num1} -- CounterAnother:{count.num2}
      </h1>
      <button onClick={() => dispatch({ type: "inc", value: 1 })}>Inc </button>
      <button onClick={() => dispatch({ type: "dec", value: 1 })}>Dec</button>
      <button onClick={() => dispatch({ type: "inc5", value: 5 })}>
        Inc 5
      </button>
      <button onClick={() => dispatch({ type: "dec5", value: 5 })}>
        Dec 5
      </button>
      <button onClick={() => dispatch({ type: "inc2", value: 1 })}>
        Inc num2
      </button>
      <button onClick={() => dispatch({ type: "dec2", value: 1 })}>
        Dec num2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default CounterTwo;
