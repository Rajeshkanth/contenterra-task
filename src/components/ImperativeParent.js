import React, { forwardRef, useImperativeHandle, useState } from "react";

function ImperativeParent(props, ref) {
  const [num1, setNum1] = useState(1);
  useImperativeHandle(ref, () => {
    return { inc };
  });

  const inc = () => {
    setNum1(num1 + 1);
  };

  return (
    <>
      <h1>ImperativeParent</h1>
      <button onClick={inc}>Inc : {num1}</button>
    </>
  );
}

export default forwardRef(ImperativeParent);
