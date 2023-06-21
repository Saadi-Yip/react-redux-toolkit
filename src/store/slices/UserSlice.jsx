import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload); 
        },

        removeUser(state, action) { 
            let filteredState =  state.filter( (resp) => { 
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