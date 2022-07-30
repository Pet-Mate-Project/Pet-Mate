import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  like: "",
  status: "idle",
}

export const AxiosGetLike = createAsyncThunk(
  'getLike/AxiosGetLike',
  async (url) => {
    console.log("💜URL", url);
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }
    const res = await axios.post(url, [], config);
    console.log("💜res.data", res.data.post);
    return res.data.post
  }
)

export const AxiosDeleteLike = createAsyncThunk(
  'DeleteLike/AxiosDeleteLike',
  async (url) => {
    console.log("💔URL", url);
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }
    const res = await axios.delete(url, config);
    console.log("💔res.data.post", res.data.post);
    return res.data.post
  }
)

export const likeStatusSlice = createSlice({
  name: "getIikeInfo",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosGetLike.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosGetLike.fulfilled, (state, action) => {
        console.log("성공💜", action);
        state.status = 'success';
        state.getLike = action.payload;
      })
      .addCase(AxiosGetLike.rejected, (state) => {
        console.log("실패");
        state.state = 'fail';
      })
      .addCase(AxiosDeleteLike.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AxiosDeleteLike.fulfilled, (state, action) => {
        console.log("성공💜", action);
        state.status = 'success';
        state.deleteLike = action.payload;
      })
      .addCase(AxiosDeleteLike.rejected, (state) => {
        console.log("실패");
        state.state = 'fail';
      });
  },
})

export const getLikeState = (state) => state.getIikeInfo?.getLike;
export const deleteLikeState = (state) => state.getIikeInfo?.deleteLike;
export const getLikeError = (state) => state.getIikeInfo?.error;
export const getLikeStatus = (state) => state.getIikeInfo?.status;

export default likeStatusSlice.reducer;

