import { Button } from '../components/button'
import { Input } from '../components/input'
import '../App.css'
import { useState } from 'react' 


export const BirthYear = ( {onContinue} ) => {
    const [inputValue, setInputValue] = useState('');
    const [disabled, setDisabled] = useState(true);

    return (
    <>
            <h2 className='text-3xl font-bold py-10'>Verify your Age</h2>
            <p className='py-1 text-gray-400 mb-1'>
                Please confirm your birth year. This data will not be stored.
            </p>
            
            <Input 
            type='text' 
            placeholder='Your Birth Year' 
            value={inputValue} 
            onChange={(e) => {
                setInputValue(e.target.value);
                setDisabled(!e.target.value.trim()); // disables button when input is empty
            }}/>

            <Button disabled={disabled} onClick={onContinue}>Continue</Button>
    </>
    )
}