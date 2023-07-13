import React from 'react'

const Form = () => {
  return (
    <form className='add-form'>
      <h3>What do you need for your 🙂 trip?</h3>
      <select>
        <options value = {1}>1</options>
        <options value = {2}>2</options>
        <options value = {3}>3</options>
      </select>
      <input type = "text" placeholder='Item...' />
      <button>Add</button>
    </form> 
  )
}

export default Form