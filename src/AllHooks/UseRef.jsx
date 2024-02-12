import React, { useEffect, useRef, useState } from 'react'

/* useref is the one which will not trigger the rerendering the component
each time when the variable of useref changes */

// Mainly use to track the state and also use to intract directly with the dom

// the useref method return an obj to the variable which contains current propery

// if the variable.current.value changes the component will no be rerendered

// Hence infinite loop of rerendering can be overcome wityh help of useref()

function UseRef() {
    const data=useRef("")
    const [num,setnum]=useState(0);
    useEffect(()=>{
      data.current.focus(); // Focus the input feild this is an example of intracting with dom directly
    },[])
    
    function submitHandler(event) {
        event.preventDefault();
        console.log(data.current.value);
        setnum(num+1); // State changes when the data changes so we can see the change of data variable in the ui
        // we only see the changes of useref variable in the ui only if any other state changes and re renders.
    }

    // TRACKS THE STATE WITHOUT RE RENDERING WITH HELP OF USEREF

//     const prevstate=useRef("")

//     const [state,setstate]=useState(0);

//     useEffect(()=>{
// prevstate.current=state
//     },[state])
  return (
    <div>
        <h1>USEREF HOOK</h1>
        <form onSubmit={submitHandler}>
            <input ref={data} type="text" placeholder='Enter your name'></input><br></br>
            <input type='submit'></input>
        </form>
        <h2>Hi,{data.current.value}</h2>
        
    </div>
  )
}

export default UseRef