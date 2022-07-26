import {createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  comment : [],
  commentId : "" ,
  commentAuthor:"",
  status : "idle",
  error: null
}

export const AxiosCommentList = createAsyncThunk(
  'getComment/AxiosCommentList',
  async(url) =>{
    const token = JSON.parse(localStorage.getItem("token")) ;
    const config = {
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    }
    const res = await axios(url,config);
    console.log("zzzz| res.data",res.data);
    return res.data
  }
)

export const CommentListSlice = createSlice({
  name : "getCommentList",
  initialState,
  reducers:{
    selectCommentId(state,action){
      console.log("댓글아디",action.payload);
      state.commentId = action.payload;
    },
    selectCommentAuthor(state,action){
      console.log("댓글작성자",action.payload);
      state.commentAuthor = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosCommentList.pending, (state) => {
        state.status ='loading';
      })
      .addCase(AxiosCommentList.fulfilled, (state, action) => {
        console.log("zzz | 🤢",action.payload);
        state.status = 'success';
        state.comment = action.payload;
        console.log(state.comment);
      })
      .addCase(AxiosCommentList.rejected,(state) => {
        console.log("실패");
        state.state ='fail';
      });
  },
})

export const selectCommentAuthor = (state) => state.getCommentList.commentAuthor;
export const selectCommentId = (state) => state.getCommentList.commentId;
export const getCommentList = (state) => state.getCommentList.comment;
export const getCommentError = (state) => state.getCommentList.error;
export const getCommentStatus = (state) => state.getCommentList.status;
export const commentAction = CommentListSlice.actions;
export default  CommentListSlice.reducer;

