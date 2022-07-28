import React from 'react'
import { Link } from "react-router-dom";
import { AllWrap } from '../../style/commonStyle'
import { EmailLoginBtn, JoinBtn } from '../../components/button/Button.jsx';
import { LogoStyle, Gap, Wrapper } from './mainStyle.js';


function Main({ loading }) {

  return (
    <>
      {
        (loading === 'false') &&
        <AllWrap>
          <Wrapper>
            <LogoStyle />
            <Gap>
              <Link to="/login"><EmailLoginBtn /></Link>
              <Link to="/join"><JoinBtn /></Link>
            </Gap>
          </Wrapper>
        </AllWrap>
      }
    </>
  )
}

export default Main