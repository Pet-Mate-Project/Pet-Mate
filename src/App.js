import React from 'react';
import GlobalStyles from './style/globalStyle';
import { Route, Routes,Navigate,useNavigate } from 'react-router-dom'
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
import Follow from './template/follow/Follow';
import ChatRoom from './template/chat/ChatRoom';
import AddSnsPost from './template/snsPost/AddSnsPost';
import NotFound from './pages/NotFoundPage';

function App() {
  const token =!!localStorage.getItem("token");
  console.log(token);
  return (
    <>
      <GlobalStyles />
      <AnimatePresence />
      <Routes>
        {/* public page */}
        <Route path='/' element={<InitPage />}></Route>
        <Route path='/login' element={token?<Navigate to ='/homepage'/> :<Login />}></Route>
        <Route path='/join' element={token?<Navigate to ='/homepage'/> :<SignUpMainPage />}> </Route>
        {/* private page */}
        <Route path='/homepage' element={token? <HomePage/> : <Navigate to ='/'/>}> </Route>
        <Route path='/feedpage' element={token ? <FeedPage /> : <Navigate to ='/'/>}></Route>
        <Route path='/profilepage' element={token ?<MyProfilePage /> : <Navigate to ='/'/>}></Route>
        <Route path='/profilemodify' element={token? <ProfileModify /> :<Navigate to ='/'/>}></Route>
        <Route path='/post' element={token? <AddPost />:<Navigate to ='/'/>}></Route>
        <Route path='/snspost' element={token? <AddSnsPost/>:<Navigate to ='/'/>}></Route>
        <Route path='/chatpage' element={token? <ChatList />:<Navigate to ='/'/>}></Route>
        <Route path='/search' element={token? <AccountSearch />:<Navigate to ='/'/>}></Route>
        <Route path='/follow' element={token? <Follow />:<Navigate to ='/'/>}></Route>
        <Route path='/chatroom' element={token? <ChatRoom />:<Navigate to ='/'/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
      <AnimatePresence />
    </>
  )
}
export default App;