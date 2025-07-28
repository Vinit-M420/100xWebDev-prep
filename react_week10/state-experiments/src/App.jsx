import { useState , useContext, createContext} from 'react'

import './App.css'


const BulbContext = createContext();

function BulbProvider( { children } ){
    const [bulbState , setBulbState] = useState(false);

    return <BulbContext.Provider value={{
      bulbState: bulbState  , setBulbState: setBulbState
    }}>
      {children}
    </BulbContext.Provider>
}

function App() {

  return (
      <div>
        <BulbProvider>
          <Light />
        </BulbProvider>

      </div>
  )
}


function Light(){
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb(){
  const {bulbState} = useContext(BulbContext);
  return <div>
    The light is {bulbState ? 'ON' : 'OFF'}
  </div>
}

function LightSwitch(){
  const {bulbState, setBulbState} = useContext(BulbContext);

  function toggle(){
    setBulbState( !bulbState)
  }
  return <div>
    <button onClick={toggle} >Switch</button>
  </div>
}

export default App
