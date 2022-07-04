import { EmailLoginBtn, JoinBtn } from '../../components/button/Button.jsx';
import React from 'react'
import { LogoStyle, Gap } from './mainStyle.js';
import { MainStyle } from '../../style/commonLoginStyle'

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