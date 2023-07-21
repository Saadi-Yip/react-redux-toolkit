import React from "react";

function Button({ textColor, backgroundColor, onClick, children, className }) {
  return (
    <button
      className = {`${className ? className : ''}`} 
      style={{ backgroundColor: backgroundColor, color: textColor}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
