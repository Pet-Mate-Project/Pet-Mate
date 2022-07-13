import styled, { css } from 'styled-components';

export const NavWrapper = styled.nav`
border-bottom:1px solid #DBDBDB; 
box-sizing:border-box;
width: 100%;
height: 48px;
padding : 8px 11px;
margin: 0 auto;
position: fixed;
top: 0;
background:white;
display:flex;
justify-content: space-between;
z-index:10;
`

export const Img = styled.img`
  width:22px;
`
export const NavBtn = styled.button`
    cursor:pointer;
    padding:5px;
`
export const NavTxt = styled.h1`
  padding:5px;
  font-size:18px;
  line-height:20px;
  display:inline-block; 
`
export const FloatR = styled.div`
  overflow:hidden;
  &:first{
    float:right
  }
`


