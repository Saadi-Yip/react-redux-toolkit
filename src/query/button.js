import React from 'react'

function Button({text, backgroundColor, color, onClick, className}) {
  return (
    <button onClick={onClick} className= {className}>{text}</button>
  )
}

export default Button