import { Button } from '../components/button'
import { Timer } from '../components/timer'
import '../App.css'
import { useRef, useState, memo } from 'react'  

export const Otp = ({email}) => {
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
            Please enter the Otp sent to your email id <span className='underline text-gray-300 font-semibold'>{email}</span>

        </p>
        <div className='flex mb-1'>

            <SubOtpBox reference={ref1} onDone={() => {
                ref2.current.focus();
            }} goBack={{}}
            />    
            <SubOtpBox reference={ref2} onDone={() => {
                ref3.current.focus();
            }} goBack={() => {
                ref1.current.focus() ;
            }}
            />  
            <SubOtpBox reference={ref3} onDone={() => {
                ref4.current.focus();
            }} goBack={() => {
                ref2.current.focus() ;
            }} />  
            <SubOtpBox reference={ref4} onDone={() => {
                ref5.current.focus();
            }} goBack={() => {
                ref3.current.focus() ;
            }}/>  
            <SubOtpBox reference={ref5} onDone={() => {
                ref6.current.focus();
            }} goBack={() => {
                ref4.current.focus() ;
            }}/>  
            <SubOtpBox reference={ref6} onDone={() => {
                setDisabled(false);
            }} goBack={() => {
                ref5.current.focus() ;
            }}/>  
        </div>
        <MemoizedTimer />
        <Button disabled={disabled}>Verify</Button>
    </>
    )
}

const MemoizedTimer = memo(() => {
    return <Timer/>
})

function SubOtpBox({ reference, onDone, goBack }) {
    const [inputVal, setInputVal] = useState('');

    return (
        <div>
            <input ref={reference}
            value={inputVal}
            onKeyUp={(e) => {
                const val = e.target.value;
                
                if (e.key === 'Backspace'){
                    setInputVal("");
                    goBack();
                }
                else if (val.length === 1){
                    onDone();
                }

            }}
            onChange={(e) => {  
                const val = e.target.value;
                const code = `${val}`.charCodeAt(0);  

                if (code >= 48 && code <= 57) {
                    setInputVal(val);
                    onDone();
                } 
            }}
            maxLength={1}
            type='text' 
            className='m-1 w-[40px] h-[50px] bg-blue-500 text-white rounded-xl outline-none px-4'/>
        </div>
     )
}
