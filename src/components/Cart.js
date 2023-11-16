import React, { createContext, useEffect, useState } from "react";
import Css from "./Css";

export const ListContext = createContext();
function Cart() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const AddList = (name, price) => {
    const ul = document.getElementById("ul");
    const li = document.getElementById("li");
    const newItem = { name, price };

    if (!ul.innerText.includes(name)) {
      setList([...list, newItem]);
      setTotal(total + price);
    }
    console.log(list);
  };
  const removeList = (a, b) => {
    const ul = document.getElementById("ul");
    const li = document.getElementById("li");
    const newList = [...list];
    let index = list.findIndex((x) => x.name === a);
    console.log(index);
    console.log(a, b);
    if (ul.innerText.includes(a) && index !== -1) {
      newList.splice(index, 1);
      setList(newList);
      setTotal(total - b);
    }
    console.log(list);
  };

  useEffect(() => {}, [list]);
  return (
    <ListContext.Provider value={{ list, AddList, removeList }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={{ width: "30%" }} onClick={() => AddList("HTML", 100)}>
            Add html
          </button>
          <button
            style={{ width: "30%" }}
            onClick={() => removeList("HTML", 100)}
          >
            Remove html
          </button>
          <Css />
        </div>
        <div id="course" style={{ width: "30%" }}>
          <div id="course-container">
            <div id="c-head">
              <h1 id="course-list">Cart</h1>
            </div>
            <div id="c-close">
              <h1>X</h1>
            </div>
          </div>
          <div className="list">
            <div> Name</div>
            <div>Price</div>
          </div>
          <div id="crs-list">
            <ul id="ul">
              {list.map((item, index) => (
                <li id="li" key={index}>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </li>
              ))}
            </ul>
          </div>
          <div id="total">
            <h1 className="totalName">Total</h1>
            <h3 className="evals">{total}</h3>
          </div>
        </div>
      </div>
    </ListContext.Provider>
  );
}

export default Cart;
