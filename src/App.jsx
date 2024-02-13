

import Parent from './AllHooks/Parent'
import UseEffect from './AllHooks/UseEffect'
import UseMemo from './AllHooks/UseMemo'
import UseReducer from './AllHooks/UseReducer'
import UseRef from './AllHooks/UseRef'
import UseState from './AllHooks/UseState'
import './App.css'

function App() {
 

  return (
    <>
      <div>
       <UseState/>
       <UseEffect/>
       <UseMemo/>
       <UseRef/>
       <Parent/> {/* UseContext */}
       <UseReducer/>
      </div>
    </>
  )
}

export default App
