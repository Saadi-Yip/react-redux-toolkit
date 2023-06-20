import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            console.log("reducer function user...", action.payload)
        },
        removeUser(state, action) { },
        deleteAllUsers(state, action) { },
    }
});

export { userSlice }