import React, { useEffect, useState, useRef } from 'react'

export const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date()); // update time every second
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString(); 

  return <div style={{textAlign:"center"}}> 
    <h2>Current Time: {formattedTime}</h2>
  </div>
}

