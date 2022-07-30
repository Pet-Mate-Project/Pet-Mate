import { memo } from 'react'
import styled from 'styled-components'
import { palette } from './globalColor'

export const AllWrap = styled.div`
  position: absolute;
  background-color:white;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  width:100%;
  height:100%;
  max-width: 600px;
  max-height:  1200px;
  overflow: hidden;
  box-shadow: 0 0 10px ${palette.lightGray};
`

export const ScrollMain = styled.main`
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding: 48px 5px 61px;
  ::-webkit-scrollbar {
    width: 7px;
    display: none;
  }
  ::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${palette.veryLigntGray};
    border-radius: 10px;
  }
`

export const PaddingMain = styled.main`
  padding : 30px 34px;
`

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  @media screen and (min-width:450px) {
    font-size: 30px;
  }
`
export const MemoTitle = memo(Title);

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 30px 0;
  //모바일 환경일경우
  @media screen and (max-width:420px) {
    gap: 16px; 
  }
`

export const Heading = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`