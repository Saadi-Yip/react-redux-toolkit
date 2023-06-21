import React, { useState, useLayoutEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UsePostData from '../../../hooks/PostHook';
import './login.css'
import { authSlice } from '../../store/slices/AuthSlice';
const Login = () => {
  const [user, setUser] = useState();
  const { isLoading, error, postData } = UsePostData('https://backend-yip.cyclic.app/login');
  const navigate = useNavigate();

  // Check Login  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
  useLayoutEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn])
  const login = authSlice.actions.login;
  const dispatch = useDispatch();
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
        // Handle the result if needed
        console.log(result.email, ' Logged In Successfully!');
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
            <a href="#">Forgot password?</a>
            <input type="submit" className="forget" value={isLoading ? "loading..." : "Login"} disabled={isLoading} />
            {error && <p>Error: {error}</p>}
          </form>
        </div>
        <div className="form login">
        </div>
      </div>
    </section>
  )
}

export default Login