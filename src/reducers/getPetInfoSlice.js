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
    console.log("๐บres.data : ",res.data);
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
        console.log("๋ก๋์ค");
        state.status = 'loading';
      })
      .addCase(AxiosPetInfo.fulfilled, (state, action) => {
        console.log("๋์ ํซ๋ฐ์ดํฐ ์ฑ๊ณต๐บ",action);
        state.status = 'success';
        state.petData = action.payload;
      })
      .addCase(AxiosPetInfo.rejected,(state,action) => {
        console.log("์คํจ");
        state.state = 'fail';
      });
  },
})

export const selectAllPosts = (state) =>state.getPetInfo.petData;
export const getPostsError = (state) => state.getPetInfo.error;
export const getPostStatus = (state) => state.getPetInfo.status;
export default  petInfoSlice.reducer;
export const postActions = petInfoSlice.actions;
