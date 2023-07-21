import React, { useState } from 'react'

function Calculator() {
    const [bill, setBill] = useState("");
    const [satisfied, setSatified] = useState("");
    const [fSatisfied, fSetSatified] = useState("");
    let total = 0;
      total = bill && (Number(bill) + (Number(satisfied) + Number(fSatisfied))/2);
    const handleClick = () => {
      setBill("");
      setSatified(satified => satified == "");
      fSetSatified(satified => satified == "");
    }
  return ( 
    <>
    <form>
        <input type='text' value = {bill} onChange={(e) =>setBill((bill) =>e.target.value)} />
        <select value={satisfied} onChange = {(e) => setSatified(e.target.value)}>
            <option value = "0">Dissatisfied</option>
            <option value = "10">Satisfied</option>
            <option value = "20">Exceptional</option>
        </select>
        <select value={fSatisfied} onChange = {(e) => fSetSatified(e.target.value)}>
            <option value = "0">Dissatisfied</option>
            <option value = "10">Satisfied</option>
            <option value = "20">Exceptional</option>
        </select>
    {total}
    </form>
    <button onClick = {handleClick} >Reset</button>
    </>
  )
}

export default Calculator