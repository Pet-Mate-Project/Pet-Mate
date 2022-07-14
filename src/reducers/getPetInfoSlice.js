import {createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  petData : [],
  status : "idle",
  error: null
}

const userInfo = JSON.parse(localStorage.getItem("userinfo")).user
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
    console.log("config:",config);
    const res = await axios(url,config);
    console.log("createAsyncThunk : ",res);
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
        console.log("로드중",state);
        state.status = 'loading';
      })
      .addCase(AxiosPetInfo.fulfilled, (state, action) => {
        console.log("성공",action);
        console.log(action.payload);
        state.status = 'idle';
        state.petData = action.payload;
        console.log( current(state));
      })
      .addCase(AxiosPetInfo.rejected,(state,action) => {
        console.log("실패",state);
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
