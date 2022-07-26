import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  detailData: [],
  status: "idle",
  error: null
}


export const AxiosDetail = createAsyncThunk(
  'detailInfo/axiosDetail',
  async (url) => {
    console.log("detail url?", url);
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }
    const res = await axios(url, config);
    console.log("res.data.post : ", res.data.post);
    return res.data
  }
)

export const AxiosWalkingPostDetail = createAsyncThunk(
  'detailInfo/axiosWalingPostDetail',
  async (url) => {
    console.log("walingpostdetail url?", url);
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }
    const res = await axios(url, config);
    console.log("res.data.product : ", res.data.product);
    return res.data
  }
)


export const detailInfoSlice = createSlice({
  name: "DetailInfo",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosDetail.pending, (state) => {
        console.log("sns상세페이지 로드중");
        state.status = 'loading';
      })
      .addCase(AxiosDetail.fulfilled, (state, action) => {
        console.log("sns상세페이지 성공", action);
        state.status = 'suceess';
        state.detailData = action.payload;
      })
      .addCase(AxiosWalkingPostDetail.fulfilled, (state, action) => {
        console.log("pet 상세페이지 성공", action);
        state.status = 'suceess';
        state.walkingDetailData = action.payload;
      })
      .addCase(AxiosDetail.rejected, (state, action) => {
        console.log("sns상세페이지 실패");
        state.state = 'fail';
      });
  },

})

console.log("디테일부분", detailInfoSlice);
export const selectDetailPosts = (state) => state.DetailInfo.detailData;
export const selectWalkingPostDetail = (state) => state.DetailInfo.walkingDetailData;
export const detailPostsError = (state) => state.DetailInfo.error;
export const detailPostStatus = (state) => state.DetailInfo.status;

export default detailInfoSlice.reducer;
export const detailActions = detailInfoSlice.actions;
