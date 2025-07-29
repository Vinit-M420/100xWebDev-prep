import React, { useEffect, useState, useRef } from 'react'

export const Timer = () => {
  const [time , setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // const [lapCount, setLapCount] = useState([]);
  const [customMinutes , setCustomMinutes]= useState("");
  const [customSeconds , setCustomSeconds]= useState("");
  const timerRef = useRef();

  useEffect(  () => {
    if (isRunning && time > 0){ 
      timerRef.current = setInterval( () => {
      setTime((sec) => {
        if (sec > 1) return sec - 1;
        
        clearInterval(timerRef.current) 
        setIsRunning(false);
        return 0;
      })
      } , 1000 );
    }
  
  return () => clearInterval(timerRef.current)
  }, [isRunning, time])


  const startTimer = () =>{
    if (!isRunning && time > 0) setIsRunning(true);
  };

  const stopTimer = () => {
    if (isRunning) setIsRunning(false);
  };

  const resetTimer = () =>{
      setIsRunning(false);
      setTime(0);
      setCustomMinutes("");
      setCustomSeconds("");
  };

   const applyCustomTime = () => {
    const minutes = parseInt(customMinutes) || 0;
    const seconds = parseInt(customSeconds) || 0;
    const totalSec = (minutes * 60) + seconds;
    if (totalSec > 0){
      setTime(totalSec);
      setIsRunning(false);
      // setLapCount([]);
      setCustomMinutes("");
      setCustomSeconds("");
    }
    else {
      alert("Please enter a valid time");
    }
  }


  return (
    <div>
        <div style={{textAlign:"center"}}>
          <h2>⏱ Timer: {Math.floor(time/60) > 9 ? Math.floor(time/60) : `0${Math.floor(time/60)}`}:
                        {time % 60 < 10 ? `0${time % 60}` : time % 60}</h2>
          <div style={{marginBottom:"10px"}}>
            <input type="number" placeholder="MM" value={customMinutes} 
              style={{fontSize:"16px", marginRight:'5px', borderRadius:"8px", border:"5px", padding:"8px", width:"40px"}}
              onChange={(e) => setCustomMinutes(e.target.value)}/>
            <span> : </span>
            <input type="number" placeholder="SS" value={customSeconds} 
              style={{fontSize:"16px", marginRight:'5px', borderRadius:"8px", border:"5px", padding:"8px", width:"40px"}}
              onChange={(e) => setCustomSeconds(e.target.value)}/>

            <button onClick={applyCustomTime}>Add</button>
          </div>


          {/* <ul style={{ listStyleType: "none", padding: 0 }}>
            {lapCount.map((lapObj) => (
              <li key={lapObj.lap} >
                <b>Lap {lapObj.lap}: {lapObj.time} seconds</b>
              </li>
            ))}
          </ul> */}

          <div style={{display:"flex", justifyContent:"space-evenly", gap:"5px"}}>
            <button onClick={startTimer}>Start</button> 
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
            {/* <button onClick={lapTimer}>Lap</button> */}
          </div>
        </div>
    </div>
  )
}

