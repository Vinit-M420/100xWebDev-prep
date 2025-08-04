import { Button } from '../components/button'
import { Input } from '../components/input'
import '../App.css'
import { useState } from 'react'  // Add this import


export const Email = ( {onContinue} ) => {
    const [inputEmail, setEmail] = useState('');
    const [disabled, setDisabled] = useState(true);

    return (
    <>
        <h2 className='text-3xl font-bold py-10'>Let's Get Started</h2>
            
            <Input 
            type='text' 
            placeholder='Email Id' 
            value={inputEmail} 
            onChange={(e) => {
                setEmail(e.target.value);
                setDisabled(!e.target.value.trim()); // disables button when input is empty
            }}/>

            <Button disabled={disabled} onClick={onContinue}>Continue</Button>
    </>
    )
}