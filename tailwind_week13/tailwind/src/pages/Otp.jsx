import { Button } from '../components/button'
// import { Input } from '../components/input'
import '../App.css'
import { useRef, useState } from 'react'  

export const Otp = () => {
    //const [inputEmail, setEmail] = useState('');
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, setDisabled] = useState(true);

    return (
    <>
        <h2 className='text-3xl font-bold py-10'>Check Your Email for a Code</h2>
        <p>
            Please enter the Otp sent to your email id
        </p>
        <div className='flex mb-10'>

            <SubOtpBox reference={ref1} onDone={() => {
                ref2.current.focus();
            }} />    
            <SubOtpBox reference={ref2} onDone={() => {
                ref3.current.focus();
            }}/>  
            <SubOtpBox reference={ref3} onDone={() => {
                ref4.current.focus();
            }} />  
            <SubOtpBox reference={ref4} onDone={() => {
                ref5.current.focus();
            }}/>  
            <SubOtpBox reference={ref5} onDone={() => {
                ref6.current.focus();
            }} />  
            <SubOtpBox reference={ref6} onDone={() => {
                setDisabled(false);
            }} />  
        </div>
        <Button disabled={disabled}>Verify</Button>
    </>
    )
}

function SubOtpBox({ reference, onDone }) {
    return (
        <div>
            <input ref={reference}
            onChange={ (e) => {  onDone()  }}
            type='text' 
            className='m-1 w-[40px] h-[50px] bg-blue-500 text-white rounded-xl outline-none px-4'/>
        </div>
     )
}