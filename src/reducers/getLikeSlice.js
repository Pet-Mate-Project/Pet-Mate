import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  like: '',
  status: 'idle',
}

export const AxiosGetLike = createAsyncThunk(
  'getLike/AxiosGetLike',
  async (URL) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }
    const res = await axios.post(URL, [], config);
    return res.data.post;
  }
)

export const AxiosDeleteLike = createAsyncThunk(
  'DeleteLike/AxiosDeleteLike',
  async (URL) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }
    const res = await axios.delete(URL, config);
    return res.data.post;
  }
)

export const likeStatusSlice = createSlice({
  name: 'getLikeInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosGetLike.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosGetLike.fulfilled, (state, action) => {
        state.status = 'success';
        state.getLike = action.payload;
      })
      .addCase(AxiosGetLike.rejected, (state) => {
        state.state = 'fail';
      })
      .addCase(AxiosDeleteLike.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosDeleteLike.fulfilled, (state, action) => {
        state.status = 'success';
        state.deleteLike = action.payload;
      })
      .addCase(AxiosDeleteLike.rejected, (state) => {
        state.state = 'fail';
      });
  },
})

export const getLikeState = (state) => state.getLikeInfo?.getLike;
export const deleteLikeState = (state) => state.getLikeInfo?.deleteLike;
export const getLikeError = (state) => state.getLikeInfo?.error;
export const getLikeStatus = (state) => state.getLikeInfo?.status;
export default likeStatusSlice.reducer;


