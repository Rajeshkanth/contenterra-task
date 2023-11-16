import React, { useContext } from "react";
import { myContext } from "../App";
import Context from "./Context";

function ReducerWithContext() {
  const countContext = useContext(myContext);
  return (
    <>
      ReducerWithContext - {countContext.countState}
      <button onClick={() => countContext.countDispatch("inc")}>Inc</button>
      <button onClick={() => countContext.countDispatch("dec")}>Dec</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
      <Context />
    </>
  );
}

export default ReducerWithContext;
