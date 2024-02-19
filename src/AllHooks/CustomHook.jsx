// CUSTOMHOOKS ARE NOTHING BUT JAVASCRIPT FUNCTION WHICH USE THE REACTHOOKS IN IT.
// THIS MAKES THE CODE MORE READABLE AND MAINTAINABLE AND REUSABLE.
import React from 'react'
import useCustomHook from './useCustomHook'
import useScreen from './useScreen'
function CustomHook() {
    const [count,increment,decrement,reset]=useCustomHook(0)

    const size=useScreen()
  return (

    <div>
        <h1>CUSTOM HOOKS</h1>
        <h2>COUNT IS : {count}</h2>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>RESET</button>

        <h2>SCREEN SIZE IS : {size}</h2>
    </div>
  )
}

export default CustomHook