import { useRef } from "react";


export function useDebounce(orginalFn){
    const currentClock = useRef();

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(orginalFn, 200);
    }

    return fn
 }