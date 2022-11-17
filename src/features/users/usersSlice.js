import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL);
        // We can just return response.date instead of putting it in a new array
        return [...response.data];
    } catch (err) {
        return err.message;
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    // Because it's asyncThunk and happens outside the slice. We once again need to supply extraReducers inside the slice to handle that.
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // Here we return the payload and that means it replace the user state completely. 
            // It means we are completely overwriting the state. It also means we are not going to accidentally add in the users twice or something like that.
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) => state.users.find(user => user.id === userId)

export default usersSlice.reducer;