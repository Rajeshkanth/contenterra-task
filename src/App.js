// import { createContext, useReducer, useRef } from "react";
// import "./App.css";
// import CounterReducer from "./components/CounterReducer";
// import CounterTwo from "./components/CounterTwo";
// import DataFetching from "./components/DataFetching";
// import DoubleCounter from "./components/DoubleCounter";
// import ImperativeParent from "./components/ImperativeParent";
// import Memo from "./components/Memo";
// import ReducerWithContext from "./components/ReducerWithContext";
// import FetchingByState from "./components/FetchingByState";
// import Cart from "./components/Cart";

import { useEffect, useState } from "react";
import axios from "axios";
// export const myContext = createContext();
// const initialValue = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "inc":
//       return state + 1;
//     case "dec":
//       return state - 1;
//     case "reset":
//       return initialValue;
//   }
// };

// function App1() {
//   const myRef = useRef();
//   const add = () => {
//     myRef.current.inc();
//   };

//   const [count, dispatch] = useReducer(reducer, initialValue);
//   return (
//     <myContext.Provider value={{ countState: count, countDispatch: dispatch }}>
//       {/* <h1>Data Fetching Using Axios</h1> */}
//       {/* <DataFetching /> */}
//       {/* <CounterReducer /> */}
//       {/* <CounterTwo /> */}
//       {/* <FetchingByState /> */}
//       {/* <h1>Global Count Value: {count} </h1>
//       <button onClick={add}>Add in child imperative</button>
//       <DoubleCounter />
//       <ImperativeParent ref={myRef} />
//       <ReducerWithContext /> */}
//       <Cart />
//     </myContext.Provider>
//   );
// }

// export default App1;

export default function App() {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/reactjs.json")
      .then((res) => {
        console.log(res);
        const postData = res.data.data.children.map((post) => ({
          title: post.data.title,
          selfText_html: post.data.selftext_html,
          url: post.data.url,
          score: post.data.score,
        }));
        setPosts(postData);
      })
      .catch((err) => setErr(err));
  }, []);

  return (
    <>
      {err === "" ? (
        <>
          {posts.map((post, index) => (
            <div key={index}>
              <h1>{post.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: post.selfText_html }}></p>
              <a href={post.url}>Read more</a>
              <p>Score: {post.score}</p>
              <hr />
            </div>
          ))}
        </>
      ) : (
        { err }
      )}
    </>
  );
}
