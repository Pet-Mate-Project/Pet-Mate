import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: [],
  status: 'idle',
}

export const AxiosUserData = createAsyncThunk(
  'userdata/axiosUserData',
  async (URL) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }
    const res = await axios(URL, config);
    return res.data.profile;
  }
)

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosUserData.fulfilled, (state, action) => {
        state.status = 'success';
        state.userData = action.payload;
      })
      .addCase(AxiosUserData.rejected, (state) => {
        state.status = 'fail';
      });
  },
})

export const selectUserData = (state) => state.userInfo.userData;
export const getUserDataStatus = (state) => state.userInfo.status;
export const postActions = userInfoSlice.actions;
export default userInfoSlice.reducer;
