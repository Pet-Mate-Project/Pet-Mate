import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  postData: '',
  status: 'idle',
}

export const AxiosFollow = createAsyncThunk(
  'follow/axiosfollow',
  async (URL) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }
    const res = await axios(URL, config);
    return res.data;
  }
)

export const followInfoSlice = createSlice({
  name: 'getFollow',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosFollow.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosFollow.fulfilled, (state, action) => {
        state.status = 'success';
        state.followData = action.payload;
      })
      .addCase(AxiosFollow.rejected, (state) => {
        state.state = 'fail';
      });
  },
})

export const selectAllFollowers = (state) => state.getFollow.followData;
export const getFollowError = (state) => state.getFollow.error;
export const getFollowStatus = (state) => state.getFollow.status;
export const followActions = followInfoSlice.actions;
export default followInfoSlice.reducer;