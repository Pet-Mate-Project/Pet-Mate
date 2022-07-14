import {createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  petData : [],
  status : "idle",
  error: null
}


let userInfo="";
if (localStorage.getItem("userinfo")!==null){
  userInfo = JSON.parse(localStorage.getItem("userinfo")).user ;
}

const token =userInfo.token;
const config = {
  headers: {
    "Authorization" : `Bearer ${token}`,
    "Content-type" : "application/json"
  },
}

export const AxiosPetInfo = createAsyncThunk(
  'petinfo/axiosPetinfo',
  async(url) =>{
    const res = await axios(url,config);
    console.log("res.data.product : ",res.data.product);
    return res.data
  }
)

export const petInfoSlice = createSlice({
  name : "getPetInfo",
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosPetInfo.pending, (state) => {
        console.log("로드중");
        state.status = 'loading';
      })
      .addCase(AxiosPetInfo.fulfilled, (state, action) => {
        console.log("성공",action);
        state.status = 'idle';
        state.petData = action.payload;
      })
      .addCase(AxiosPetInfo.rejected,(state,action) => {
        console.log("실패");
        state.state = 'fail';
      });
  },
})


console.log("petInfoSlice",petInfoSlice);
export const selectAllPosts = (state) =>state.getPetInfo.petData;

export const getPostsError = (state) => state.getPetInfo.error;

export const getPostStatus = (state) => state.getPetInfo.status;

export default  petInfoSlice.reducer;
export const postActions = petInfoSlice.actions;
