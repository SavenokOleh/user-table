import { createAsyncThunk } from '@reduxjs/toolkit';
import getUserById from "../../requests/getUserById";

const getUser = createAsyncThunk('user/get-by-id', async (id: number) => {
    return (await getUserById(id)).data.data;
});

export default getUser;
