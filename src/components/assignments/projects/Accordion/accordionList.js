import React, { useState } from "react";

function AccordionList({title, text, index}) {
    const [isIndex, setIsIndex] = useState(null);
    const handleToggle = (id) => {
        console.log(id);
      setIsIndex((isIndex) => isIndex === null ? id: null);
    };
  return (
    <div className={`item ${isIndex !==null && "open"}`} onClick={() =>handleToggle(index)}>
      <span className="number">
        {index < 8 ? `0${index + 1}` : `${index + 1}`}
      </span>
      <span className="title">{title}</span>
      <span className="icon">{isIndex === null ? "+" : "-"}</span>
      {isIndex === index && <span className="content-box">{text}</span>}
    </div>
  );
}

export default AccordionList;
