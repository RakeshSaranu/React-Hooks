import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [resourcetype, setresourcetype] = useState("POSTS");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Rakesh");

    fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourcetype]);

  return (
    <div>
      <h1>USE EFFECT HOOK</h1>
      <button onClick={() => { setresourcetype("POSTS") }}>POSTS</button>
      <button onClick={() => { setresourcetype("USERS"); }}>USERS</button>
      <button onClick={() => { setresourcetype("COMMENTS"); }}>COMMENTS</button>

      <h2>{resourcetype}</h2>

      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  )
}

export default UseEffect;
