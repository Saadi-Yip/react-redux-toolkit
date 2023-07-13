
import './step.css';
import { useState } from 'react'
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function Step() {
  const [step, setStep] = useState(1)
  const [toggle, setToggle] = useState(true);
  console.log(step);
  return (
    <>
       <button className='close' onClick={()=>{setToggle((isOpen)=>!isOpen)}}>&times;</button>
      {toggle && <div className="steps">
        <div className='numbers'>
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className='message'>Step {step}: {messages[step - 1]}</p>
        <div className='buttons'>
          <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={() => step > 1 && setStep((s)=> s - 1)}>Previous</button>
          <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={() => step < 3 && setStep(step + 1)}>Next</button>
        </div>
      </div>
      }
    </>
  );
}

export default Step;
