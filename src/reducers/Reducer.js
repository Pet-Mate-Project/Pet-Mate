import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

let initialState = {
  "itemName": "hello", //글제목
  "price": "100000",
  "link": "www",
  "itemImage": "image1"
}

export const postSlice = createSlice({
  name : "uploadPost",
  initialState,
  reducers:{
    postAllCont(state,action){
      console.log("state:",state);
      console.log("action:",action);
      state.itemName = action.payload.data;
      console.log(state.itemName);
    }
  }
})

console.log(postSlice);
export default  postSlice.reducer;
export const postActions = postSlice.actions;

