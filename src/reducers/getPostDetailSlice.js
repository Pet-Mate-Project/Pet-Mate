import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  detailData: [],
  status: 'idle',
  error: null
}

export const AxiosDetail = createAsyncThunk(
  'detailInfo/axiosDetail',
  async (URL) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }
    const res = await axios(URL, config);
    return res.data;
  }
)

export const AxiosWalkingPostDetail = createAsyncThunk(
  'detailInfo/axiosWalingPostDetail',
  async (URL) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }
    const res = await axios(URL, config);
    return res.data
  }
)

export const detailInfoSlice = createSlice({
  name: 'DetailInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosDetail.fulfilled, (state, action) => {
        state.status = 'suceess';
        state.detailData = action.payload;
      })
      .addCase(AxiosWalkingPostDetail.fulfilled, (state, action) => {
        state.status = 'suceess';
        state.walkingDetailData = action.payload;
      })
      .addCase(AxiosDetail.rejected, (state) => {
        state.state = 'fail';
      });
  },
})

export const selectDetailPosts = (state) => state.DetailInfo.detailData;
export const selectWalkingPostDetail = (state) => state.DetailInfo.walkingDetailData;
export const detailPostsError = (state) => state.DetailInfo.error;
export const detailPostStatus = (state) => state.DetailInfo.status;
export const detailActions = detailInfoSlice.actions;
export default detailInfoSlice.reducer;
