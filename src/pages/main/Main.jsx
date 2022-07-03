import { EmailLoginBtn, JoinBtn } from '../../components/button/Button.jsx';
import React from 'react'
import { LogoStyle, MainStyle, Gap } from './mainStyle.js';

function Main() {
  return (
    <>
      <MainStyle>
        <LogoStyle />
        <Gap>
          <EmailLoginBtn />
        </Gap>
        <JoinBtn />
      </MainStyle>
    </>
  )
}

export default Main