import React from "react"; 
import { Route, Routes } from "react-router-dom";  
import ProtectedRoute from './../hooks/utils/ProtectedRoute';
import Home from "./home/Home";
import Login from './auth/login/Login'; 
import Layout from "./layout/Layout";
const ManageRoutes = () => {
   
  return (
    <>
      <Routes>
        <Route exact path="/" element = 
          {
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
        <Route index element = 
          {
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default ManageRoutes;
