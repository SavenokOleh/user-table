import { createAsyncThunk } from '@reduxjs/toolkit';
import putUser from "../../requests/putUser";
import {User} from "../../requests/getAllUsers";

const updateUser = createAsyncThunk('user/get-by-id', async (userData: User) => {
    return (await putUser(userData)).data.data;
});

export default updateUser;
