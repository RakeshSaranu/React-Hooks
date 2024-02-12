import React, { useState } from 'react';
import UseContext from './UseContext';
import { UserContext } from './Context'; // Assuming UserContext is defined in Context.jsx

function Parent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>USECONTEXT HOOK</h1>
            <h2>Parent Component</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            <UserContext.Provider value={{ count, setCount }}> 
                <UseContext/>
            </UserContext.Provider>
        </div>
    );
}

export default Parent;
