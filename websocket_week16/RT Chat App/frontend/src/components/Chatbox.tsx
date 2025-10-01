import { useEffect, useRef, useState } from 'react'
import { Copy, X, MessageSquareX } from 'lucide-react';
import { useAlertStore, useRoomJoinedStore, useRoomStore } from '../store';

interface MsgInfo {
    message: string,
    isOwn: boolean
}

const Chatbox = () => {
    const [messages, setMessages] = useState<MsgInfo[]>([]);
    const { roomCode, setRoomCode } = useRoomStore();
    const {toggleAlert , setToggleAlert} = useAlertStore();
    const { setRoomJoined } = useRoomJoinedStore();
    const modalAlert = useRef(null);
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
                payload: { roomId: roomCode }
            }))
        }

        return () => ws.close();
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

    useEffect(() => {
        const showAlert = setTimeout(() => setToggleAlert(false), 3000);
        return () => clearTimeout(showAlert)
    }, [toggleAlert]);

     const handleAlertClose = () => {
        setToggleAlert(false);
    }


    return (
        
        <div className='flex flex-col justify-center items-center mt-5 gap-5'>
            {roomCode && (
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-white text-4xl'>Real Time Chat Room</h1>
                <h3 className='text-xl text-gray-400 bg-black p-2 rounded-2xl 
                    flex gap-4 items-center'>Room Code:{" "}
                    <span className="flex gap-2 items-center">
                    <span className='text-gray-200'>{roomCode}</span>
                    <div onClick={() => {
                                navigator.clipboard.writeText(roomCode);
                                setToggleAlert(true);
                            }}>
                        <Copy className='text-gray-400 hover:text-gray-100 cursor-pointer size-5'/>
                    </div>
                    </span>
                </h3>
            </div>
            )}
            <div className='border border-gray-500 rounded-xl h-[500px] w-[700px] 
                        bg-black p-6 overflow-y-auto scroll-smooth scrollbar'>
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
                    placeholder:text-gray-300 w-xl p-2' 
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
            <button className='bg-white text-black py-2 px-6 rounded-2xl font-semibold
                transition duration-100hover:bg-gray-200 cursor-pointer'
                onClick={sendMessage}>
                Send</button>
        </div> 
        
        {/* Leave Chat Room Button */}
        <div className='fixed top-6 right-6 flex items-center justify-between p-4 cursor-pointer
                text-sm text-white border border-gray-400 rounded-lg w-fit h-fit gap-2 transition duration-200
                hover:border hover:border-gray-200 hover:shadow-xs hover:shadow-gray-200'
            onClick={() =>{
                setRoomCode('');
                setRoomJoined(false);
            }}>
            <MessageSquareX className='size-4'/>
            <span>Leave Chat Room</span>
        </div>

        {toggleAlert && (
            <div ref={modalAlert}
                role="alert"
                className="fixed inset-x bottom-6 left-6 mx-auto flex items-center justify-between 
                            p-4 text-sm text-black bg-gray-200 rounded-lg w-fit max-w-xs shadow z-50">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 
                                1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 
                                0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="font-medium">Copied Room Code</span>
                    
                </div>
                
                <button onClick={handleAlertClose} className="ml-3">
                    <X className="size-3" />
                </button>
            </div>
            )}    
    </div>
    )
}

export default Chatbox;