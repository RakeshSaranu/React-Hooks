// 
// import React,{useReducer} from 'react'
// // USEREDUCER IS SIMILAR TO USESTATE BUT WHEN THERE IS A COMPLEX LOGIG IS REQUIRED FOR THE STATE CHANGE
// // THEN THIS USEREDUCER IS USED.
// function reducer(State,action)
// {
//     switch(action.type)
//     {
//         case "increment":
//             return State+1
//         case "decrement" :
//             return State-1
//             default:
//                 throw new Error();
//     }
// }

// function UseReducer() {

//     const initialstate=0
//     const [State,dispatch]=useReducer(reducer,initialstate)
//     /*reducer is the function which performs some logic and returns the new modified state.
//     dispatch is a function returned by the usereducer hook which is used to call the reducer function.
//     when dispatch function is called the react internally calls the reducer function 
//     with current state and an object {tyep:"increment"} as parameter */
//   return (
//     <div>
//         <h1>USEREDUCER HOOK</h1>
//     <h2>Count is :{State}</h2>
//     <button onClick={()=>{
//         dispatch({type:"increment"})}
//     }>Increment</button>
//     <button onClick={()=>{
//         dispatch({type:"decrement"})}}
//         >Decrement</button>

//     </div>
//   )
// }

// export default UseReducer



import React, { useReducer, useState } from 'react'

function reducer(State,action)
{
    switch(action.type)
    {
        case "add":
            return [...State,action.payload]
        case "delete":
            return State.filter((contact)=>{
                return contact.id !== action.payload;}
            );
            default:
                throw new Error();
        
    }
}
function UseReducer() {
const initialstate=[{
    id:Date.now(),
    name:"Rakesh",
    email:"Rakeshsaranu@gmail.com"
}]
    const [State,dispatch]=useReducer(reducer,initialstate);
    const [name,setname]=useState("");
    const [email,setemail]=useState("")

    const adduser=(e)=>{
e.preventDefault();
const user={
    id:Date.now(),
    name,
    email
};
dispatch({type:"add", payload:user});
    }

  return (
    <div>
        <h1>USEREDUCER HOOK</h1>
        <form onSubmit={adduser}>
        <input type='text' placeholder='Name' onChange={(e)=>{
            setname(e.target.value);
        }}></input> 
        <br></br>
        <input type='text' placeholder='Email' onChange={(e)=>{
            setemail(e.target.value);
        }}></input>
<br></br>
        <button>ADD USER</button>
        </form>

<div>
    <ul>
        {
            State.map((contact)=>{
                return (
                    <div>
                        <li key={contact.id}>
                        <h2>{contact.name}</h2>
                        <h2>{contact.email}</h2>
                    </li>
                    <br></br>
                    <button onClick={() => {dispatch({type: "delete", payload: contact.id})}}>DELETE USER</button>

                    </div>
                   
                )
            })
        }
    </ul>
</div>

    </div>
  )
}

export default UseReducer







