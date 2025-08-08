// import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
