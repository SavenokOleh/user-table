import {createSlice } from '@reduxjs/toolkit';
import {User} from "../../requests/getAllUsers";
import getUsers from "../actions/getUsers";
import getUser from "../actions/getUser";
import updateUser from "../actions/updateUser";

interface UserI {
    currentUser: User | null,
    users: Array<User> | null,
    isLoading: Boolean,
    error: null | String;
}

const initialState: UserI = {
    currentUser: null,
    users: null,
    isLoading:false,
    error: null
}

const userReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateName: function (state, action) {
            state.currentUser !== null && (state.currentUser.name = action.payload);
        },
        updateEmail: function (state, action) {
            state.currentUser !== null && (state.currentUser.email = action.payload);
        },
        updateStatus: function (state, action) {
            state.currentUser !== null && (state.currentUser.status = action.payload);
        },
        updateGender: function (state, action) {
            state.currentUser !== null && (state.currentUser.gender = action.payload);
        },
        cleanCurrentUser: function (state) {
            state.currentUser = null;
        }
    },
    extraReducers: {
        [getUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled.type]: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        [getUsers.rejected.type]: (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        },
        [getUser.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getUser.fulfilled.type]: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        [getUser.rejected.type]: (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        },
        [updateUser.rejected.type]: (state, action) => {
            state.error = action.error;
        }
    }
})

export const { updateName, updateStatus, updateGender, updateEmail, cleanCurrentUser } = userReducer.actions

export default userReducer.reducer;
