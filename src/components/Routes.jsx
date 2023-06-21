import React, {useEffect} from 'react'
import Login from './auth/login/Login'
import { Route, Routes, redirect, useLocation, useNavigate } from "react-router-dom"; 
import { useSelector } from 'react-redux';
import Home from './Home';
const ManageRoutes = () => {  
  const navigate = useNavigate();
  const location = useLocation()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, location])
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default ManageRoutes