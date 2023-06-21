import React from 'react'
import { useDispatch } from 'react-redux';
import { authSlice } from '../../store/slices/AuthSlice';
const Home = () => {
  const logout = authSlice.actions.logout;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  }
  return (
    <>
      <div>Home</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  )
}

export default Home