
import Button from '../../items/button';
import Message from '../../items/message';
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
       <Button className = "close" onClick={()=>{setToggle((isOpen)=>!isOpen)}}> &times;</Button> 
      {toggle && <div className="steps">
        <div className='numbers'>
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className='message'><Message step = {step}>{messages[step - 1]}</Message></p>
        <div className='buttons'>
          <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={() => step > 1 && setStep((s) => s - 1)}
             ><span>🐃</span>Previous</Button>
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={() => step < 3 && setStep((s) => s + 1)}
               
            >Next<span>🛩</span></Button>
        </div>
      </div>
      }
    </>
  );
}

export default Step;
