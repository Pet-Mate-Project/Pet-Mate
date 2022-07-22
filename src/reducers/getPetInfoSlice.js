import {createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  petData : [],
  status : "idle",
  error: null
}


export const AxiosPetInfo = createAsyncThunk(
  'petinfo/axiosPetinfo',
  async(url) =>{
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
        state.status = 'success';
        state.petData = action.payload;
      })
      .addCase(AxiosPetInfo.rejected,(state,action) => {
        console.log("실패");
        state.state = 'fail';
      });
  },
})

export const selectAllPosts = (state) =>state.getPetInfo.petData;
export const getPostsError = (state) => state.getPetInfo.error;
export const getPostStatus = (state) => state.getPetInfo.status;
export default  petInfoSlice.reducer;
export const postActions = petInfoSlice.actions;
