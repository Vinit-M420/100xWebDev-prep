import { useEffect, useRef, useState } from "react"

export const Timer = () => {
    const [time, setTimer] = useState(600)
    const timerRef = useRef();
    useEffect( () => {
        if (time > 0){
            timerRef.current = setInterval(() => {
                  setTimer((sec) => {
                    if (sec > 1) return sec - 1;
                    return 0;
                  })
                } , 1000 );
        }
        return () => clearInterval(timerRef.current)
    } 
    , [time])

    return <div className="mb-10">
        Timer: {Math.floor(time/60) > 9 ? Math.floor(time/60) : `0${Math.floor(time/60)}`}:
                {time % 60 < 10 ? `0${time % 60}` : time % 60}
    </div>
}