import { Button } from '../components/button'
import { Input } from '../components/input'
import '../App.css'
import { useState, memo } from 'react' // Add memo to the imports

export const BirthYear = ({ onContinue }) => {
    const [inputValue, setInputValue] = useState('');
    const [disabled, setDisabled] = useState(true);

    return (
        <>
            <BirthYearHeader />

            <Input 
                type='text' 
                placeholder='Your Birth Year' 
                value={inputValue} 
                onChange={(e) => {
                    setInputValue(e.target.value);
                    setDisabled(!e.target.value.trim());
                }}
            />
            
            <Button disabled={disabled} onClick={onContinue}>
                Continue
            </Button>
        </>
    )
}

const BirthYearHeader = memo(() => {
    console.log('BirthYearHeader ACTUALLY RENDERED'); 
    
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold py-10'>Verify your Age</h2>
            <p className='py-1 text-gray-400 mb-1'>
                Please confirm your birth year. This data will not be stored.
            </p>
        </div>
    )
})