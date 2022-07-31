import {createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  postData: '',
  status : 'idle',
}

export const AxiosPost = createAsyncThunk(
  'post/axiosPost',
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

export const postInfoSlice = createSlice({
  name : 'getPost',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosPost.fulfilled, (state, action) => {
        state.status = 'success';
        state.postData = action.payload;
      })
      .addCase(AxiosPost.rejected,(state) => {
        state.state = 'fail';
      });
  },
})

export const selectAllSnsPosts = (state) =>state.getPost.postData;
export const getSnsPostStatus = (state) => state.getPost.status;
export const postActions = postInfoSlice.actions;
export default  postInfoSlice.reducer;

