import React, { useEffect, useState, useRef } from 'react'

export const Timer = () => {
  const [seconds , setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapCount, setLapCount] = useState([]);
  const timerRef = useRef();

  useEffect(  () => {
    if (isRunning){ 
      timerRef.current = setInterval( () => {
        setSeconds(sec => sec + 1)
      } , 1000 );
    }
  
  return () => clearInterval(timerRef.current)
  }, [isRunning])


  const startTimer = () =>{
    if (!isRunning) setIsRunning(true);
  };

  const stopTimer = () => {
    if (isRunning) setIsRunning(false);
  };

  const resetTimer = () =>{
      setIsRunning(false);
      setSeconds(0);
      useState([]);
  };

  const lapTimer = () => {
  setLapCount((prev) => [...prev, { lap: prev.length + 1, time: seconds }]);
  };

  return (
    <div>
        <div style={{textAlign:"center"}}>
          
          <h2>⏱ Timer: {seconds} sec</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {lapCount.map((lapObj) => (
              <li key={lapObj.lap} >
                <b>Lap {lapObj.lap}: {lapObj.time} seconds</b>
              </li>
            ))}
          </ul>

          <div style={{display:"flex", justifyContent:"space-evenly", gap:"5px"}}>
            <button onClick={startTimer}>Start</button> 
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
            <button onClick={lapTimer}>Lap</button>
          </div>
        </div>
    </div>
  )
}

export const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date()); // update time every second
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString(); 

  return <div style={{textAlign:"center"}}> 
    <h2>Current Time: {formattedTime}</h2>
  </div>
}

