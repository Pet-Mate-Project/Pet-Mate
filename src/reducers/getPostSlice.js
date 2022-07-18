import {createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  postData: "",
  status : "idle",
}


export const AxiosPost = createAsyncThunk(
  'post/axiosPost',
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
    console.log("res.data.product : ",res.data.product);
    return res.data
  }
)

export const postInfoSlice = createSlice({
  name : "getPost",
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosPost.pending, (state) => {
        console.log("로드중");
        state.status = 'loading';
      })
      .addCase(AxiosPost.fulfilled, (state, action) => {
        console.log("성공",action);
        state.status = 'idle';
        state.postData = action.payload;
        console.log(current(state));
      })
      .addCase(AxiosPost.rejected,(state,action) => {
        console.log("실패");
        state.state = 'fail';
      });
  },
})

console.log("postInfoSlice",postInfoSlice);

export const selectAllSnsPosts = (state) =>state.getPost.postData;


export const getSnsPostStatus = (state) => state.getPost.status;

export default  postInfoSlice.reducer;

export const postActions = postInfoSlice.actions;
