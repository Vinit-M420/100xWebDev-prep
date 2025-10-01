import './App.css'
import Chatbox from './components/Chatbox'
import Room from './components/Room'
import { Routes, Route, Navigate } from "react-router-dom";
import { useRoomJoinedStore } from './store';


function App() {
  const { roomJoined } = useRoomJoinedStore();
 
  return (
    <>
      <Routes>
        <Route path="/" 
          element= {!roomJoined && <Room />} />

        <Route path="/room/:roomCode" 
          element= {roomJoined ? <Chatbox /> : <Navigate to="/" replace />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
