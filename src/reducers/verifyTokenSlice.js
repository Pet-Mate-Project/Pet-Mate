import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status : 'idle',
}

export const AxiosVerifyToken = createAsyncThunk(
  'verify/axiosVerifyToken',
  async(URL) =>{
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-type' : 'application/json'
      },
    }
    if(token!==null){ 
      const res = await axios(URL,config);
      return res.data;
    }
  }
)

export const verifyTokenSlice = createSlice({
  name : 'verifyToken',
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosVerifyToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosVerifyToken.fulfilled, (state, action) => {
        state.status = action.payload?.isValid;
      })
      .addCase(AxiosVerifyToken.rejected,(state) => {
        state.status = 'fail';
      });
  },
})

export const getTokenVerifyStatus = (state) => state.verifyToken;
export default  verifyTokenSlice.reducer;