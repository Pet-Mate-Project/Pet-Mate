import React from 'react';
import GlobalStyles from './style/globalStyle';
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Main from './template/main/Main';
import InitPage from './pages/InitPage';
import Login from './template/login/Login'
import { AnimatePresence } from 'framer-motion';
import SignUpMainPage from './pages/SignUpMain';
import AddPost from './template/post/AddPost'
import { NavBack,NavTxtSearch,NavSearch,ProfileSaveNav ,PostSaveNav} from './components/navBack/NavBack';

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
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/post' element={<AddPost/>}></Route> 
      </Routes>
      <AnimatePresence />
     
    </>
  )
}
export default App;