import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'

function App() {
    const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div className='flex'>
      <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      <Main toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
    </div>
  )
}

export default App
