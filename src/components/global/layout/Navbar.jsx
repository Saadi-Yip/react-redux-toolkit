import React from "react";
import Profile from "../../../assets/profile.jpg"
import Logo from "../../../assets/logo.png"
import { useDispatch } from 'react-redux';
import { authSlice } from '../../../store/slices/AuthSlice';
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg"; 

const Navbar = () => { 
  const logout = authSlice.actions.logout;
  const dispatch = useDispatch(); 
  const logoutHandler = () => {
    dispatch(logout());
  }  
  return (
    <div>
      <nav className="navbar">
        <div className="logo_item">
          <CgMenuRightAlt id = "sidebarOpen"/>
          <img src={Logo} alt="" />LeilaniTech
        </div>

        <div className="search_bar">
          <input type="text" placeholder="Search" />
        </div>

        <div className="navbar_content">
          <MdOutlineNotifications style={{ fontSize: "1.5rem", color: "#707070", cursor: "pointer" }} />
          <AiOutlineLogout style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" }} onClick={logoutHandler} />
          <img src={Profile} alt="" className="profile" />
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
