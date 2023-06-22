import React, { useState } from 'react';  
import { CgChevronRight } from "react-icons/cg"; 
const Collapsible = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  }; 
  return (
    <div> 
      <div href="#" className="nav_link submenu_item " onClick={toggleCollapsible}>
        <span className="navlink_icon">
         {icon}
        </span>
        <span className="navlink">{title}</span>
        <CgChevronRight className="arrow-left" />
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
