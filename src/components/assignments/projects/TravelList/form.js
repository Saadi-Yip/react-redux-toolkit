import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [selects, setSelected] = useState()
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSelected(1);
    setName("");
  }
  return ( 
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select  value={selects} onChange={(e) => setSelected(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        I
      </select>
      <input type="text" placeholder="Item..." value={name} onChange={(e) => setName(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default Form