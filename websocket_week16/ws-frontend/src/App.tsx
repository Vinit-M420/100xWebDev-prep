
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket]  = useState<WebSocket>();
  const inputRef = useRef(null);

  function sendMessage(){
    if (!socket) return;
    //@ts-ignore
    const message = inputRef.current.value;
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    }
  }, []);

  return (
    <div className='flex flex-col gap-10'>
        {/* Hey there */}
        <input ref={inputRef} type='text' placeholder='Message...'></input>
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
