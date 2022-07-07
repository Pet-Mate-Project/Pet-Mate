import styled, { css } from 'styled-components';


export const NavWrapper = styled.nav`
//임시스타일! border-bottom으로사용하세요
margin:50px; //삭제예정
border:1px solid #DBDBDB; 
box-sizing:border-box;
width: 390px;
height: 48px;
padding : 8px 11px;
`

export const Img = styled.img`
  width:100%;
`
export const NavBtn = styled.button`
    cursor:pointer;
    padding:5px;
    &:first-child{
      float:left;
    }
    &:last-child{
      float:right;  
    }
` 
export const NavTxt = styled.p`
  padding:5px;
  font-size:14px;
  line-height:20px;
  display:inline-block; 
`
export const FloatR = styled.div`
  overflow:hidden;
  &:first{
    float:right
  }
`


