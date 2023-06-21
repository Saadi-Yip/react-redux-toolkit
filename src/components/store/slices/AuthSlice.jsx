import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userInfo: {}, // for user object
    userToken: null,
    isLoggedIn: false, // for monitoring the registration process.
  }
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            let user = {
                id: action.payload.id,
                email: action.payload.email
            }
            state.userInfo = user;
            state.isLoggedIn = true;
            state.userToken = action.payload.token;
            console.log(state)
        },
        logout(state, action) {
            
            state.isLoggedIn = false; 
            console.log(state);
        }
    }
});

export { authSlice }