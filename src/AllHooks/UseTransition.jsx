import React, { useTransition } from 'react'

import { useState } from 'react';
// usetransition hook is used when we need to have priority over state execution.

/* Suppose we have two states on state will updates and renders fast and other state 
   updates and renders slow where react executes and updates both states at a time
   then this slow function results in degration of performance in the first state.
   */

   // So in this case we need to use usetransition when sets the preority for the states.

function UseTransition() {

    const [isPending,startTransition]=useTransition();
    const [input,setinput]=useState('');
    const [list,setlist]=useState([]);
    const list_size=2000;
    const handleChange=(e)=>{
        setinput(e.target.value)
       startTransition(()=>{
        // Slow function
        const l=[]
        for(let i=0;i<list_size;i++)
        {
            l.push(e.target.value);
        }
        setlist(l);
       })
    }


  return (
    <div>
        <h1>USE TRANSITION HOOK</h1>
        <input type='text' value={input} onChange={handleChange}></input>
        { isPending
        ? "Loading..."
         :   list.map((item,index)=>{
                return <div key={index}>{item}</div>
            })
        }
        </div>
  )
}

export default UseTransition