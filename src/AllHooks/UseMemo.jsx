import React,{useState,useMemo} from 'react'

function UseMemo() {

    const [num,setnum]=useState(0);
    const [dark,setdark]=useState(false);

    // const Double=slowFunction(num); This slow function calls for every render 
    // even if the num does not change also the slowfunction gets executed this decrease the performance

    const Double=useMemo(()=>{
        return slowFunction(num); // This usememo code executes only when the num changes
        // If the num does not changes the usememo memorize 
        // the previous return result it gives the sme to the Double variable.
        // This improves the performance and use of more usememo Hook result in more memory.
    },[num])

    const theme=useMemo(()=>{
        return{
            backgroundColor:dark ? 'black' : 'white',
            Color:dark ? 'white' :'black'
        }
    },[dark]);
    


    function slowFunction(num)
    {
        for(let i=0;i<100000000;i++)
        {

        }
        return num*2;
    }


  return (
    <div>
    <h1>USEMEMO HOOK</h1>

<input type="number" value={num} onChange={e=>setnum(parseInt(e.target.value))}/>
<button onClick={()=>setdark(prevdark=>!prevdark)}>ChangeTheme</button>
    <h2 style={theme}>{Double}</h2>
    </div>
  )
}

export default UseMemo