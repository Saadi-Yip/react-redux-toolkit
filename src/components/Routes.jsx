import React from 'react'
import Login from './auth/login/Login'
import { Route, Routes } from "react-router-dom";
import { useAuthenticatedRoute } from '../hooks/CheckAuth';
import Home from './Home';
const ManageRoutes = () => {
  useAuthenticatedRoute('/login')
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default ManageRoutes