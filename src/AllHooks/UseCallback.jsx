import React, { useCallback, useState } from 'react'
import List from './List';

function UseCallback() {
    const [number,setnumber]=useState('');
    const [dark,setdark]=useState(false);
    const theme={
        backgroundColor : dark ? '#333' : '#fff',
        color:dark ? '#fff' : '#333' 
    }
// Where as usememo returns the value of the function
// where the usecallback returns the entire funtion
// Increases the performance

    const getItems=useCallback(()=>{
        return [number,number+1,number+2]
    },[number]); // So here the getItems function only recreates when the number changes.
  return (
    <div style={theme}>
        <h1>USECALLBACK HOOK</h1>
        <input type='number' value={number} onChange={(e)=>setnumber(parseInt(e.target.value))}></input>
        <br></br>
        <button onClick={()=>setdark(prevdrak=>!prevdrak)}>TOOGLE THEME</button>
        <List getItems={getItems}></List>
    </div>
  )
}

export default UseCallback