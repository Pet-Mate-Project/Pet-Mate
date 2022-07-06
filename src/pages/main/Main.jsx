import { EmailLoginBtn, JoinBtn } from '../../components/button/Button.jsx';
import React from 'react'
import { LogoStyle, Gap } from './mainStyle.js';
import { MainStyle } from '../../style/commonLoginStyle'
import { Link } from "react-router-dom";
import Login from '../login/Login.jsx';

function Main({loading,visible}) {
 
  return (
    <>
      {
        (loading ==='false')&&
          <MainStyle>
            <LogoStyle />
            <Gap>
              <Link to ="/login" >  <EmailLoginBtn /></Link>
            </Gap>
            <Link to ="/join" > <JoinBtn /></Link>
          </MainStyle> 
        
      }
    </>
  )
}

export default Main