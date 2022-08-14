import { createAsyncThunk } from "@reduxjs/toolkit";
import getAllUsers from "../../requests/getAllUsers";

const getUsers = createAsyncThunk("user/get-all", async () => {
  return (await getAllUsers()).data.data;
});

export default getUsers;
