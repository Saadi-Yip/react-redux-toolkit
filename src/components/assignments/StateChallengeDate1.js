import React, { useState } from 'react'

const StateChallengeDate1 = () => {
    
    const [value, setValue] = useState(0)
    const [step, setStep] = useState(1)
   
    //  setday(date.getDay());
    const date = new Date("jul 13 2023");
    date.setDate(date.getDate() + value);
     const goBack = () => {
        setValue((v)=>v- step); 
     }    
     const goForward = () => {
        setValue((v)=>v+ step ); 
     }     
    return (
        <>
        <div>
            Step:
            <button onClick={() =>step >1 && setStep(s=>s-1)}>prev</button>
            {step}
            <button onClick={() =>setStep(s=>s+1)}>add</button>
        </div>
        <div>
            Value:  
            <button onClick={goBack}>prev</button>
            {value}
            <button onClick={goForward}>add</button>
        </div>
            <p>{value == '0' ? "Today is " : value < 0 ? `${Math.abs(value)} days ago is ` : `${value} days from is `} {date.toDateString()}</p>
        </>
    )
}

export default StateChallengeDate1