import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import { authSlice } from "./slices/AuthSlice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        auth: authSlice.reducer
    }
});
export default store;