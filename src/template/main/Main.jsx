import { EmailLoginBtn, JoinBtn } from '../../components/button/Button.jsx';
import React from 'react'
import { LogoStyle, Gap } from './mainStyle.js';
import { AllWrap, PaddingMain } from '../../style/commonStyle'
import { Link } from "react-router-dom";


function Main({ loading, visible }) {

  return (
    <>
      {
        (loading === 'false') &&
        <AllWrap  key={Math.random() * 100} >
          <PaddingMain>
            <LogoStyle />
            <Gap>
              <Link to="/login" >  <EmailLoginBtn /></Link>
            </Gap>
            <Link to="/join" > <JoinBtn /></Link>
          </PaddingMain>
        </AllWrap>

      }
    </>
  )
}

export default Main