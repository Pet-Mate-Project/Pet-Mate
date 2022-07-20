import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  postData: "",
  status: "idle",
}


export const AxiosFollow = createAsyncThunk(
  'follow/axiosfollow',
  async (url) => {
    console.log(url);
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }
    const res = await axios(url, config);
    console.log("follow res.data : ", res.data);
    return res.data
  }
)

export const followInfoSlice = createSlice({
  name: "getFollow",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosFollow.pending, (state) => {
        console.log("로드중");
        state.status = 'loading';
      })
      .addCase(AxiosFollow.fulfilled, (state, action) => {
        console.log("성공", action);
        state.status = 'idle';
        state.followData = action.payload;
        console.log('follow', current(state));
      })
      .addCase(AxiosFollow.rejected, (state, action) => {
        console.log("실패");
        state.state = 'fail';
      });
  },
})

console.log("followInfoSlice", followInfoSlice);

export const selectAllFollowers = (state) => state.getFollow.followData;
export const getPostsError = (state) => state.getFollow.error;
export const getPostStatus = (state) => state.getFollow.status;

export default followInfoSlice.reducer;
export const followActions = followInfoSlice.actions;