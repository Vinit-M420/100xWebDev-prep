import { useState, useRef, useEffect } from 'react'
// import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'
import './App.css'

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef()

  function startClock(){
        let value = setInterval( function() {
          setCurrentCount(c => c + 1);
        }, 1000 );
      timer.current = value;
  }
  
  function stopClock(){
    clearInterval(timer.current);
  }

  return (
      <div>
        Timer
        <br />
        {currentCount} <br />
        <button onClick={startClock} style={{marginRight:"10px"}}>Start</button> 
        <button onClick={stopClock} >Stop</button>

      </div>
  )

  
}

export default App
