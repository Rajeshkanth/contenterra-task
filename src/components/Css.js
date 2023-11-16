import React, { memo, useContext } from "react";
import { ListContext } from "./Cart";

function Css() {
  const { List, AddList, removeList } = useContext(ListContext);
  return (
    <>
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button style={{ width: "30%" }} onClick={() => AddList("CSS", 100)}>
          Add CSS
        </button>
        <button style={{ width: "30%" }} onClick={() => removeList("CSS", 100)}>
          Remove CSS
        </button>
      </div>
    </>
  );
}

export default memo(Css);
