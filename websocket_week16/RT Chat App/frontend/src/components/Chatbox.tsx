import { useEffect, useRef, useState } from 'react'

interface MsgInfo {
    message: string,
    isOwn: boolean
}

const Chatbox = () => {
    const [messages, setMessages] = useState<MsgInfo[]>([]);
    const wsRef = useRef<WebSocket | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8069")
        ws.onmessage = (event) => {
            setMessages(m => [...m, {message: event.data, isOwn: false}]);
        }
        wsRef.current = ws;

        ws.onopen = () => {
            ws.send(JSON.stringify({
                type: "join",
                payload: { roomId: "red" }
            }))
        }

        return () => ws.close()
    }, [])

    function sendMessage(){
        const message = inputRef.current?.value;
        if (message === null || message?.length === 0 ){
            return alert("Please enter a valid message!");
        }
        //@ts-ignore
        setMessages(m => [...m, {message: message, isOwn: true} ]);
        
        wsRef.current?.send(JSON.stringify({
            type:"chat",
            payload: { message: message }
        }));

        if (inputRef.current) {
            inputRef.current.value = ""; 
        }
    }


    return (
        <div className='flex flex-col justify-center items-center gap-10 mt-5'>
            <h1 className='text-white text-4xl'>Real Time Chat Room</h1>
            
            <div className='border border-gray-500 rounded-xl h-[500px] w-[700px] 
                        bg-black p-4 overflow-y-auto'>
                <div className='flex flex-col gap-2'>
                    {messages.map((msgInfo, index) => 
                    <div key={index} 
                        className={`text-black py-1 px-4 bg-white w-fit rounded 
                            ${msgInfo.isOwn ?  "ml-auto" : "mr-auto"}`}>
                        {msgInfo.message}
                    </div>
                    )}
                </div>
            </div>

        <div className='flex gap-5'>
          <input ref={inputRef} type="text" placeholder='Message ...' 
          className='border border-gray-500 rounded-xl text-white bg-black
                  placeholder:text-gray-300 w-xl p-2' />
          <button className='bg-white text-black py-2 px-6 rounded-2xl font-semibold
                transition duration-100hover:bg-gray-200 cursor-pointer'
                onClick={sendMessage}>
            Send</button>
        </div>    
    </div>
    )
}

export default Chatbox;