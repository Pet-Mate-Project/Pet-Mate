import {createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  feedData: "",
  status : "idle",
}

export const AxiosFeedPost = createAsyncThunk(
  'feedpost/axiosFeedPost',
  async(url) =>{
    console.log(url);
    const token = JSON.parse(localStorage.getItem("token")) ;
    const config = {
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    }
    const res = await axios(url,config);
    console.log("res.data.product : ",res.data);
    return res.data
  }
)

export const feedPostInfoSlice = createSlice({
  name : "getFeedPost",
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosFeedPost.pending, (state) => {
        console.log("로드중");
        state.status = 'loading';
      })
      .addCase(AxiosFeedPost.fulfilled, (state, action) => {
        console.log("성공",action);
        state.status = 'success';
        state.feedData = action.payload;
        console.log(current(state));
      })
      .addCase(AxiosFeedPost.rejected,(state,action) => {
        console.log("실패");
        state.status = 'fail';
      });
  },
})

export const selectFeedPosts = (state) =>state.getFeedPost.feedData;
export const getFeedStatus = (state) => state.getFeedPost.status;
export default  feedPostInfoSlice.reducer;
export const postActions = feedPostInfoSlice.actions;
