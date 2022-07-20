import {createSlice,createAsyncThunk,current } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  type:"",
  id:"",
  resMeg : "로딩중",
  status : "idle",
}

export const AxiosDeletePost = createAsyncThunk(
  'deletePost/axiosDeletePost',
  async(url) =>{
    const token = JSON.parse(localStorage.getItem("token")) ;
    const config = {
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    }
    const res = await axios.delete(url,config);
    console.log("res.data: ",res.data);
    return res.data;
  }
)

export const deletePost = createSlice({
  name : "deletePost",
  initialState,
  reducers:{
    deleteId (state,action) {
      console.log("클릭한 id",action.payload);
      state.id = action.payload; 
    },
    checkType (state,action) {
      console.log("삭제 할 게시글 종류",action.payload);
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosDeletePost.pending, (state) => {
        state.status = 'loading';
        state.resMeg  = "로드중";
      })
      .addCase(AxiosDeletePost.fulfilled, (state, action) => {
        state.status = 'success';
        state.resMeg  = action.payload;
      })
      .addCase(AxiosDeletePost.rejected,(state) => {
        state.state = 'fail';
      });
  },
})

export const selectDeleteMsg = (state) =>state.deletePost.resMeg;
export const getDeleteStatus = (state) => state.deletePost.status;
export const DeleteId = (state) => state.deletePost.id;
export const DeleteType = (state) => state.deletePost.type;
export default  deletePost.reducer;
export const deleteActions = deletePost.actions;
