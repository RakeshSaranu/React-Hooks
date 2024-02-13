import React, { useState } from 'react'
const [sourcetype,setsourcetype]=useState("POST")
function useEffectHook() {
  return (
    <div>

    <button onClick={()=>{
        setsourcetype("POST")
    }}>POST</button>
<button onClick={()=>{
    setsourcetype("USERS")
}}>USERS </button>
<button onClick={()=>{
    setsourcetype("COMMENTS")
}}>COMMENTS</button>

<h1>{sourcetype}</h1>
    </div>
  )
}

export default useEffectHook