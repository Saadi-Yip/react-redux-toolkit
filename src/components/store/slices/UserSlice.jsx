import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            console.log("reducer function user...", action.payload)
        },

        removeUser(state, action) { 
            let filteredState =  state.filter( (resp) => {
                console.log(resp, action.payload)
                return resp.id !== action.payload
            }) 
            return state = filteredState
        },
        deleteAllUsers(state, action) {
            return state = []
        },
    }
});

export { userSlice }