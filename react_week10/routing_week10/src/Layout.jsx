import { useState } from 'react'
import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/cohort/2" element={<Cohort2 />} />
              <Route path="/cohort/3" element={<Cohort3 />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
       </div>
  )

  function Layout(){
    return <div style={{height:"100vh"}}>
      <Header />
      <div style={{height:"80vh"}}>
        <Outlet />
      </div>
      Footer
    </div>
  }

  function Header(){
    return <div>
        <Link to="/">100x</Link> |
        <Link to="/cohort/2">Cohort2</Link> | 
        <Link to="/cohort/3">Cohort3</Link>
    </div>
  }

  function Landing(){
    return <div>
      Welcome to 100x
    </div>
  }

  function Cohort2(){
    return <div>
      Cohort 2 baby
    </div>
  }

  function Cohort3(){
    return <div>
      Cohort 3 baby
    </div>
  }

  function ErrorPage(){
    return <div>
      Sorry not found
    </div>
  }
}

export default App
