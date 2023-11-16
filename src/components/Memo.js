import React, { useMemo, useState } from "react";

function Memo() {
  const [val, setVal] = useState("");
  const changeVal = (event) => {
    setVal(event.target.value);
  };

  const getDouble = useMemo(() => {
    let time = new Date().getTime();
    let a = 0;
    while (a < 3) {
      a = (new Date().getTime() - time) / 1000;
    }
    return 2 * parseInt(val || 0);
  }, [val]);
  return (
    <>
      <h1>Memo</h1>
      <input type="text" value={val} onChange={changeVal} />{" "}
      <h1>{getDouble} </h1>
    </>
  );
}

export default Memo;
