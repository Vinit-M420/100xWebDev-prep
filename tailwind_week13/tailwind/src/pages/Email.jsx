import { Button } from '../components/button'
import { Input } from '../components/input'
import '../App.css'
import { useState } from 'react'  // Add this import


export const Email = ( { currentEmail ,  setCurrentEmail , onContinue} ) => {
    // const [inputEmail, setEmail] = useState('');
    const [disabled, setDisabled] = useState(true);

    return (
    <>
        <h2 className='text-3xl font-bold py-10'>Let's Get Started</h2>
            
            <Input 
            type='text' 
            placeholder='Email Id' 
            value={currentEmail} 
            onChange={(e) => {
                setCurrentEmail(e.target.value);
                setDisabled(!e.target.value.trim());
            }}/>

            <Button disabled={disabled} onClick={onContinue}>Continue</Button>
    </>
    )
}