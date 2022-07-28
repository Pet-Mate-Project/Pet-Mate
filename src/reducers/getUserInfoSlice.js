import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  userData: [],
  status: "idle",
}

export const AxiosUserData = createAsyncThunk(
  'userdata/axiosUserData',
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
    console.log("res.data.profile🐿️ : ", res.data.profile);
    return res.data.profile
  }
)

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosUserData.pending, (state) => {
        console.log("🐿️로드중");
        state.status = 'loading';
      })
      .addCase(AxiosUserData.fulfilled, (state, action) => {
        console.log("🐿️성공", action);
        state.status = 'success';
        state.userData = action.payload;
      })
      .addCase(AxiosUserData.rejected, (state) => {
        console.log("🐿️실패");
        state.status = 'fail';
      });
  },
})

export const selectUserData = (state) => state.userInfo.userData;
export const getUserDataStatus = (state) => state.userInfo.status;
export default userInfoSlice.reducer;
export const postActions = userInfoSlice.actions;
