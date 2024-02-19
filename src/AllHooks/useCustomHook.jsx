import React, { useState } from 'react'

function useCounter(initialcount) 
{
  const [value,setvalue]=useState(initialcount);

  const increment=()=>{
return setvalue(value+1);
  }
  const decrement=()=>{
    return setvalue(value-1);
      }
      const reset=()=>{
        return setvalue(initialcount);
      }

      return [value,increment,decrement,reset]
}

export default useCounter