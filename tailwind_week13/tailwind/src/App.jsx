import { useState } from 'react'
import './App.css'
import { BirthYear } from './pages/BirthYear';
import { Email } from './pages/Email';
import { Otp } from './pages/Otp';


function App() {
  const [currentPage, setCurrentPage] = useState('birthYear'); 
  const [currentEmail, setCurrentEmail] = useState('');

  return (
      <div className='h-screen flex flex-col justify-center place-items-center bg-blue-200 text-white' >
          { currentPage === 'birthYear' && (
          <BirthYear onContinue={() => setCurrentPage('email')} />
          )}
          
          {currentPage === 'email' && (
          <Email onContinue={() => setCurrentPage('otp') } /> )}

          {currentPage === 'otp' && (
          <Otp /> )}
      </div>

  )
}

export default App
