import { createAsyncThunk } from '@reduxjs/toolkit';
import getAllUsers from "../../requests/getallUsers";

const getUsers = createAsyncThunk('user/get-all', async () => {
        return (await getAllUsers()).data;
});

export default getUsers;
