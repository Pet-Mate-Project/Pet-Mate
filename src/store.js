import { configureStore } from "@reduxjs/toolkit";
import getPetInfoReducer from './reducers/getPetInfoSlice'
import getPostReducer from "./reducers/getPostSlice";
import deletePostReducer from './reducers/deletePostSlice'
import getFollowSlice from './reducers/getFollowSlice';

//추후고려
// const userToken = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userinfo")).user.token
//   : null;

// const initialState = {
//   userLogin: { userToken: userToken },
// };

export const store = configureStore({
  reducer: {
    // initialState,
    getPetInfo: getPetInfoReducer,
    getPost: getPostReducer,
    deletePost: deletePostReducer,
    getFollow: getFollowSlice
  },
})
