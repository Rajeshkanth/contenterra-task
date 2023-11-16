import React, { useContext } from "react";
import { myContext } from "../App";

function Context() {
  const countContext = useContext(myContext);
  return (
    <>
      <h1>Context value from parent: {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch("inc")}>Inc</button>
      <button onClick={() => countContext.countDispatch("dec")}>Dec</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </>
  );
}

export default Context;
