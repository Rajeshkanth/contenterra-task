import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtn, setIdFromBtn] = useState(1);

  const handleClick = () => {
    setIdFromBtn(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtn]);
  return (
    <>
      <div>
        <h1>Data Fetching</h1>
        <input
          type="text"
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <button onClick={handleClick}>Get Data</button>
        <p>{post.title}</p>
      </div>
    </>
  );
}
