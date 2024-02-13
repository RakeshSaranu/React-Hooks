import { useState } from 'react'
import './App.css'
import useEffectHook from './useEffectHook'


function App() {
// let [count,setcount]=useState(0);

//   let increase=()=>{
//     // setcount(count+1); // set couont is an asynchronous method

//     // setcount(count+1);
//     // setcount(count+1); // Here both will not be done instantly because it is asynchronus
//      // first it will update 4 to 5 and then 5 to 6 will not update directly to 6

//      // In order to solve this problem

//      setcount((prev)=>
//       prev+1
//      )
//      setcount((prev)=>
//       prev+1)
//   }
//   let decrease=()=>{
// setcount(count-1); // set couont is an asynchronous method

//   }


let [count,setcount]=useState({
  name:"RAKESH",
  marks:25
})

let increase=()=>{
  setcount((prev)=>{
    return{
      ...prev,
      marks:prev.marks+1,
    }
  })
}

let decrease=()=>{
  setcount((prev)=>{
    return{
      ...prev,
      marks:prev.marks-1,
    }
  })
}

  return (
    <>
     <div>
      
     <h1>USESTATE HOOK</h1>
     <h2>NAME IS :{count.name}</h2>
     <h2>MARKS : {count.marks}</h2>
     <button onClick={increase}>+</button>
     <button onClick={decrease}>-</button>
     <useEffectHook></useEffectHook>
     </div>
     
    </>
  )
}

export default App
