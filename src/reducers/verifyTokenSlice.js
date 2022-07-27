import { createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  status : "idle",
}

export const AxiosVerifyToken = createAsyncThunk(
  'verify/axiosVerifyToken',
  async(url) =>{
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    }
    if(token!==null){ 
      const res = await axios(url,config);
      return res.data
    }
  }
)

export const verifyTokenSlice = createSlice({
  name : "verifyToken",
  initialState,
  reducers:{
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosVerifyToken.pending, (state) => {
        console.log("로드중");
        state.status = 'loading';
      })
      .addCase(AxiosVerifyToken.fulfilled, (state, action) => {
        console.log("성공",action);
        state.status = action.payload?.isValid;
        console.log("👋",current(state));
      })
      .addCase(AxiosVerifyToken.rejected,(state,action) => {
        console.log("실패");
        state.state = 'fail';
      });
  },
})

export const getTokenVerifyStatus = (state) => state.verifyToken;
export default  verifyTokenSlice.reducer;
