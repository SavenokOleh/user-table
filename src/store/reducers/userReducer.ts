import {createSlice } from '@reduxjs/toolkit';
import {User} from "../../requests/getallUsers";
import getUsers from "../actions/getUsers";

interface UserI {
    users: Array<User> | null,
    isLoading: Boolean,
    error: null | String;
}

const initialState: UserI = {
    users: null,
    isLoading:false,
    error: null
}

const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending.type]: (state) => {
            console.log(state);
            state.isLoading = true;
        },
        [getUsers.fulfilled.type]: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        [getUsers.rejected.type]: (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        }
    }
})

export default userReducer.reducer;
