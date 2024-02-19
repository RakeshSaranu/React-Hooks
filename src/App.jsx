

import CustomHook from './AllHooks/CustomHook'
import Parent from './AllHooks/Parent'
import UseCallback from './AllHooks/UseCallback'
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
       <UseCallback/>
       <CustomHook/>
      </div>
    </>
  )
}

export default App
