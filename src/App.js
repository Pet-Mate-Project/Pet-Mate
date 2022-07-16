import React from 'react';
import GlobalStyles from './style/globalStyle';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import FeedPage from './pages/FeedPage';
import InitPage from './pages/InitPage';
import Login from './template/login/Login'
import { AnimatePresence } from 'framer-motion';
import SignUpMainPage from './pages/SignUpMain';
import MyProfilePage from './pages/MyProfilePage'
import ProfileModify from './template/profileModify/ProfileModify'
import AddPost from './template/post/AddPost';
import ChatList from './template/chat/ChatList';
import AccountSearch from './template/search/AccountSearch';

function App() {
  return (
    <>
      <GlobalStyles />
      <AnimatePresence />
      <Routes>
        <Route path='/' element={<InitPage />}></Route>
        {/* 굳이 URL을 바꿀 필요가 없을것 같음. */}
        {/* <Route path='/main' element={<Main/>}> </Route> */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/join' element={<SignUpMainPage />}> </Route>
        <Route path='/homepage' element={<HomePage />}></Route>
        <Route path='/feedpage' element={<FeedPage />}></Route>
        <Route path='/profilepage' element={<MyProfilePage />}></Route>
        <Route path='/profilemodify' element={<ProfileModify />}></Route>
        <Route path='/post' element={<AddPost />}></Route>
        <Route path='/chatpage' element={<ChatList />}></Route>
        <Route path='/search' element={<AccountSearch />}></Route>
      </Routes>
      <AnimatePresence />

    </>
  )
}
export default App;