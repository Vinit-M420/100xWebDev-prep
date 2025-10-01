import './App.css'
import { Routes, Route, Navigate  } from "react-router-dom";
import Chatbox from './components/Chatbox'
import Room from './components/Room'
import { useRoomJoinedStore } from './store';


function App() {
  const { roomJoined } = useRoomJoinedStore();


  return (
    <>
    
      {!roomJoined && <Room />}
      {roomJoined && <Chatbox />}
    </>
  )
}

export default App
