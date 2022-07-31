import styled from 'styled-components'
import { palette } from '../../style/globalColor'

export const NavWrapper = styled.nav`
border-bottom: 1px solid ${palette.lightGray}; 
box-sizing: border-box;
width: 100%;
height: 48px;
padding: 8px 11px;
margin: 0 auto;
position: fixed;
top: 0;
background: ${palette.white};
display: flex;
z-index: 10;
`

export const Img = styled.img`
  width: 22px;
`
export const NavBtn = styled.button`
  cursor:pointer;
  padding: 5px;
`
export const NavTxt = styled.h2`
  padding: 5px;
  font-size: 18px;
  line-height: 20px;
  display: inline-block;
  margin-right: auto;
`
export const FloatR = styled.div`
  overflow: hidden;
  &:first {
    float: right
  }
`


