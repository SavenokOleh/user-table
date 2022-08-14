import {createSlice } from '@reduxjs/toolkit';

interface UserI {
    users: Array<{ id: number, name: string, email: string, gender: string, status: string}> | null,
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
    reducers: {
    },
    extraReducers: {
    }
})

export default userReducer.reducer;
