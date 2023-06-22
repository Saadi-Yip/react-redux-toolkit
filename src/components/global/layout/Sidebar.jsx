import React, {useRef} from 'react'
import { AiOutlineHome, AiOutlineNotification } from "react-icons/ai";
import { FiGrid, FiSettings } from "react-icons/fi";
import { FaPersonBooth } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { RiExpandRightFill, RiExpandLeftFill } from "react-icons/ri";
import { CgUserList, CgProfile } from "react-icons/cg"; 
import Collapsible from '../../../hooks/utils/MouseEvents';

const Sidebar = () => { 
  const ref = useRef(null);
  const mouseEnter = () => {
    if (ref.current.firstChild.classList.contains("hoverable")) { 
      ref.current.firstChild.classList.remove("close");
    }
  }

  const mouseLeave = () => {
    if (ref.current.firstChild.classList.contains("hoverable")) { 
      ref.current.firstChild.classList.add("close");
    }
  }

   
  return (
    <div ref = {ref}>
      <nav className="sidebar" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_dahsboard"></div>
            <li className="item">
              <a href="/" className="nav_link">
                <span className="navlink_icon">
                  <AiOutlineHome />
                </span>
                <span className="navlink">Home</span>
              </a>
            </li>
            <li className="item">
              <Collapsible title = "Statistics" icon = {<FiGrid/>}>
                <ul className="submenu_items">
                  <a href="#" className="nav_link sublink">Nav Sub Link</a>
                  <a href="#" className="nav_link sublink">Nav Sub Link</a>
                  <a href="#" className="nav_link sublink">Nav Sub Link</a>
                  <a href="#" className="nav_link sublink">Nav Sub Link</a>
                </ul>
              </Collapsible>
            </li>
          </ul>

          <ul className="menu_items">
            <div className="menu_title menu_editor"></div>
            <li className="item">
              <a href="/tasks" className="nav_link">
                <span className="navlink_icon">
                  <GoTasklist />
                </span>
                <span className="navlink">Tasks</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <BsPersonWorkspace />
                </span>
                <span className="navlink">Attendence</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <GiReceiveMoney />
                </span>
                <span className="navlink">Salary</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <CgUserList />
                </span>
                <span className="navlink">Employees</span>
              </a>
            </li>
          </ul>
          <ul className="menu_items">
            <div className="menu_title menu_setting"></div>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <AiOutlineNotification />
                </span>
                <span className="navlink">Announcement</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <FaPersonBooth />
                </span>
                <span className="navlink">Leaves</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <FiSettings />
                </span>
                <span className="navlink">Setting</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <CgProfile />
                </span>
                <span className="navlink">Profile</span>
              </a>
            </li>
          </ul>

          <div className="bottom_content">
            <div className="bottom expand_sidebar ">
              <span>Expand</span>
              <RiExpandRightFill onClick = {()=>ref.current.firstChild.classList.remove("hoverable", "close")}/>
            </div>
            <div className="bottom collapse_sidebar">
              <span>Collapse</span>
              <RiExpandLeftFill onClick = {()=>ref.current.firstChild.classList.add("hoverable", "close")}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
