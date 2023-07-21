import React from "react";

function Message({ step, children }) {
  return (
    <>
      <h3>Step {step}</h3>
      {children}
    </>
  );
}

export default Message;
