import {createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import axios from 'axios';
import { useDispatch } from 'react-redux'


const initialState = {
  AllPetData : [],
  status : "idle",
  error: null
}

export const AxiosAllPetInfo = createAsyncThunk(
  'getAll/AxiosAllPetinfo',
  async(url) =>{
    console.log("🤢URL",url);
    const token = JSON.parse(localStorage.getItem("token")) ;
    const config = {
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    }
    const res = await axios(url,config);
    console.log("🤢res.data",res.data);
    return res.data
  }
)

export const AllpetInfoSlice = createSlice({
  name : "getAllPetInfo",
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosAllPetInfo.pending, (state) => {
        state.status ='loading';
      })
      .addCase(AxiosAllPetInfo.fulfilled, (state, action) => {
        console.log("성공🤢",action);
        state.status = 'success';
        state.AllPetData = action.payload;
      })
      .addCase(AxiosAllPetInfo.rejected,(state) => {
        console.log("실패");
        state.state ='fail';
      });
  },
})

export const getAllPetPost = (state) => state.getAllPetInfo?.AllPetData;
export const getAllPostsError = (state) => state.getAllPetInfo?.error;
export const getAllPostStatus = (state) => state.getAllPetInfo?.status;
export default  AllpetInfoSlice.reducer;

