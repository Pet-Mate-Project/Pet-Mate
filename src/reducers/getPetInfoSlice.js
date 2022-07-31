import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  petData : [],
  status : 'idle',
  error: null
}

export const AxiosPetInfo = createAsyncThunk(
  'petinfo/axiosPetinfo',
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

export const petInfoSlice = createSlice({
  name : 'getPetInfo',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosPetInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosPetInfo.fulfilled, (state,action) => {
        state.status = 'success';
        state.petData = action.payload;
      })
      .addCase(AxiosPetInfo.rejected,(state) => {
        state.state = 'fail';
      });
  },
})

export const selectAllPosts = (state) =>state.getPetInfo.petData;
export const getPostsError = (state) => state.getPetInfo.error;
export const getPostStatus = (state) => state.getPetInfo.status;
export const postActions = petInfoSlice.actions;
export default  petInfoSlice.reducer;
