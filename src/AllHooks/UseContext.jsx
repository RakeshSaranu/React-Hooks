// Context.jsx,Parent.jsx,UseContext are part of usecontext hook concept
import React, { useContext } from 'react'
import { UserContext } from './Context'

function UseContext() {
    const {count,setCount}=useContext(UserContext);
  return (
    <div>
        <h2>CHILD COMPONENT</h2>

        <h2>{count}</h2>
        <button onClick={()=>{
        setCount(count+1);
    }}>Increase</button>

<button onClick={()=>{
        setCount(count-1);
    }}>Decrease</button>
    </div>
  )
}

export default UseContext