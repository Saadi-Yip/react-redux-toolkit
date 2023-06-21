import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import './login.css'
import { authSlice } from '../../../store/slices/AuthSlice';
import UsePostData from './../../../hooks/api/PostHook'; 

// Component Start Here... 
const Login = () => {
  const [user, setUser] = useState();
  const { isLoading, error, postData } = UsePostData('https://backend-yip.cyclic.app/login');
  const navigate = useNavigate();

  // Check Login  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
  let location = useLocation();
  const login = authSlice.actions.login;
  const dispatch = useDispatch();
  if(isLoggedIn) {
    return <Navigate to="/" state={{ from: location}} replace />
  }
  //get user email and password
  const changeHandler = (event) => {
    let key = event.target.name;
    setUser({ ...user, [key]: event.target.value })
  }
  //post data to api
  const loginHandler = (event) => {
    event.preventDefault();
    postData(user)
      .then((result) => { 
        let data = {
          id: result._id,
          email: result.email,
          token: result.token
        }
        dispatch(login(data));
        navigate("/");
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error posting data:', error);
      });
  }
  return (
    <section className="auth">
      <div className="wrapper">
        <div className="form signup">
          <header>Dashboard</header>
          <form onSubmit={loginHandler} autoComplete="off">
            <input type="text" placeholder="Email address" name='email' onChange={changeHandler} required />
            <input type="password" placeholder="Password" name='password' onChange={changeHandler} required autoComplete="off" />
            <a href="/login">Forgot password?</a>
            <input type="submit" className="forget" value={isLoading ? "loading..." : "Login"} disabled={isLoading} />
            {error && <p>Error: {error}</p>} 
          </form> 
        </div>
      </div> 
    </section>
  )
}

export default Login