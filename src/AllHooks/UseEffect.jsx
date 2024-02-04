import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [resourcetype, setresourcetype] = useState("POSTS");
  const [items, setItems] = useState([]);
console.log("Sai");
  useEffect(() => {

    console.log("Rakesh");  // Empty dependency acts like didmount with dependency acts like didupdate

    fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
      .then(response => response.json())
      .then(json => setItems(json))

      return ()=>{  // This will  execute only when there is dependency change or component is unmounted
        // If there is no dependency and no unmount phase then it wont executes at first render.
        console.log("Return Resource");
      }
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
