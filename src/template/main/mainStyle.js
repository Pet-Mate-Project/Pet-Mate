import styled, { keyframes } from 'styled-components';
import BeforeLogo from '../../assets/before-logo.svg'
import AfterLogo from '../../assets/after-logo.svg'
import MainLogo from '../../assets/main-logo.svg'
import { PaddingMain, FormStyle } from '../../style/commonStyle';

const logoFadeIn = keyframes`
  0% {
    opacity: 0;
    background: url(${BeforeLogo}) no-repeat;
    background-size: 300px 300px;
    }
  30% {
    opacity: 0.4;
    background: url(${BeforeLogo}) no-repeat;
    background-size: 300px 300px;
    }
  55% {
    opacity: 0.7;
    background: url(${AfterLogo}) no-repeat;
    background-size: 300px 300px;
    }
  100% {
    opacity: 1;
    background: url(${AfterLogo}) no-repeat;
    background-size: 300px 300px;
  }
`

const logoTextFadeOut = keyframes`
  from {
    background: url(${AfterLogo}) no-repeat;
    background-size: 300px 300px;
  }
  to {
    background: url(${MainLogo}) no-repeat;
    background-size: 300px 300px;
  }
`

const buttonSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const Wrapper = styled(PaddingMain)`
  width: 100%;
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
`

export const Gap = styled(FormStyle)`
  margin: 0;
  opacity: 0;
  gap: 24px;
  animation: ${buttonSlideUp} linear 0.5s forwards;
`

export const FullLogoStyle = styled.div`
  height: 300px;
  width: 300px;
  margin: 0 auto 112px;
  animation: ${logoFadeIn} linear 1s forwards;

`

export const LogoStyle = styled.div`
  height: 300px;
  width: 300px;
  margin: 0 auto;
  animation: ${logoTextFadeOut} linear 0.5s forwards;
`
