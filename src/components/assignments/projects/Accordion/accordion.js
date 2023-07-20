import React, { useState } from "react";
import "./accordion.css";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className="accordion">
      {faqs.map((faq, index) => {
        return (
          <div className= {`item ${isOpen && 'open'}`} onClick={handleToggle}>
            <span className="number">
              {index < 8 ? `0${index + 1}` : `${index + 1}`}
            </span>
            <span className="title">{faq.title}</span>
            <span className="icon">{!isOpen ? "+" : "-"}</span>
            {isOpen && <span className="content-box">{faq.text}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
