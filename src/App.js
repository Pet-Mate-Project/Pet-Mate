import React from 'react';
import GlobalStyles from './style/globalStyle';
import SetLogin from './pages/SetLogin';
import {Route,Router,Routes} from 'react-router-dom'
import TempPage from './pages/TempPage';
import Main from './pages/main/Main';
import InitPage from './template/InitPage';
import Login from './pages/login/Login'
import {AnimatePresence} from 'framer-motion';
import SignUp from './pages/signUp/SignUp';
import SignUpMainPage from './pages/signUp/SignUpMain';
function App() {
  return (
    <>
      <GlobalStyles />
      <AnimatePresence/>
      <Routes>
        <Route path='/' element={<InitPage/>}></Route>
        <Route path='/main' element={<Main/>}> </Route>
        <Route path = '/login' element={<Login/>}></Route>
        <Route path= '/join' element={<SignUpMainPage/>}> </Route>
        {/* 임시페이지입니다  */}
        <Route path='/temppage' element={<TempPage/>}></Route>

  

      </Routes>
      <AnimatePresence/>
    </>
  );
}

export default App;
