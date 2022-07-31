import {createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  feedData: '',
  status : 'idle',
}

export const AxiosFeedPost = createAsyncThunk(
  'feedpost/axiosFeedPost',
  async(URL) =>{
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-type' : 'application/json'
      },
    }
    const res = await axios(URL,config);
    return res.data;
  }
)

export const feedPostInfoSlice = createSlice({
  name : 'getFeedPost',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosFeedPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosFeedPost.fulfilled, (state, action) => {
        state.status = 'success';
        state.feedData = action.payload;
      })
      .addCase(AxiosFeedPost.rejected,(state) => {
        state.status = 'fail';
      });
  },
})

export const selectFeedPosts = (state) =>state.getFeedPost.feedData;
export const getFeedStatus = (state) => state.getFeedPost.status;
export const postActions = feedPostInfoSlice.actions;
export default  feedPostInfoSlice.reducer;
