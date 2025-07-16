import { useState, useEffect } from 'react'
import { PostComponent } from './Post';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

useEffect( 
  function increaseRandomly(){
    setInterval(function(){
      setCount(count => count+1);
    }, 5000)
  }, [])

  return <div>
    <div>
      <b><h1>Hi there</h1></b>
    </div>
    <div>
      <div style={{display: "flex"}}>
      <div style={{backgroundColor: "red", borderRadius: 50, width:20 , height: 20, paddingLeft:5, paddingBottom:5,
                  position: "absolute", marginLeft:30
      }}>
          {count}
      </div>
    </div>
    <div>
      <img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.fNTWiZHMS-LjhInkqo99wgHaI2%3Fpid%3DApi&f=1&ipt=52c2729e053428ddb6f9a3e5fd05525aba16eac9cd7df0c467be10384c0e4eeb"} 
      style={{cursor: "pointer"}} width={40}/> 
    </div> 

    </div>
  </div>
}



export default App