import {createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comment : [],
  commentId : '' ,
  commentAuthor:'',
  status : 'idle',
  error: null
}

export const AxiosCommentList = createAsyncThunk(
  'getComment/AxiosCommentList',
  async(URL) =>{
    const token = JSON.parse(localStorage.getItem('token')) ;
    const config = {
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-type' : 'application/json'
      },
    }
    const res = await axios(URL,config);
    return res.data;
  }
)

export const CommentListSlice = createSlice({
  name : 'getCommentList',
  initialState,
  reducers:{
    selectCommentId(state,action){
      state.commentId = action.payload;
    },
    selectCommentAuthor(state,action){
      state.commentAuthor = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(AxiosCommentList.pending, (state) => {
        state.status ='loading';
      })
      .addCase(AxiosCommentList.fulfilled, (state, action) => {
        state.status = 'success';
        state.comment = action.payload;
      })
      .addCase(AxiosCommentList.rejected,(state) => {
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

