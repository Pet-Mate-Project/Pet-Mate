import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

let initialState = {
  "itemName": "", 
  "price": "99999999",
  "link": "",
  "itemImage": ""
}

export const postSlice = createSlice({
  name : "uploadPost",
  initialState,
  reducers:{
    postAllCont(state,action){

      state = action.payload.data;
      console.log("state:",state);
      console.log("action:",action);
    }
  }
})

console.log(postSlice);
export default  postSlice.reducer;
export const postActions = postSlice.actions;

