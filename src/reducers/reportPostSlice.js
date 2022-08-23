import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  type: '',
  id: '',
  resMeg: '로딩중',
  status: 'idle',
}

export const AxiosReportPost = createAsyncThunk(
  'reportPost/axiosReportPost',
  async (URL) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }
    const res = await axios.post(URL, {}, config);
    return res.data.report;
  }
)

export const reportPost = createSlice({
  name: 'reportPost',
  initialState,
  reducers: {
    selectId(state, action) {
      state.id = action.payload;
    },
    checkType(state, action) {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosReportPost.pending, (state) => {
        state.status = 'loading';
        state.resMeg = '로드중';
      })
      .addCase(AxiosReportPost.fulfilled, (state, action) => {
        state.status = 'success';
        state.resMeg = action.payload;
      })
      .addCase(AxiosReportPost.rejected, (state) => {
        state.state = 'fail';
      });
  },
})

export const selectReportMsg = (state) => state.reportPost.resMeg;
export const getReportStatus = (state) => state.reportPost.status;
export const ReportId = (state) => state.reportPost.id;
export const ReportType = (state) => state.reportPost.type;
export const reportActions = reportPost.actions;
export default reportPost.reducer;
