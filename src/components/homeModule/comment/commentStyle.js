import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
padding: 10px;
color: #C4C4C4;
font-size: 14px;
line-height: 17px;
box-sizing: border-box;
`

export const CommentTextStyle = styled.input`
font-size: 14px;
line-height: 17px;
margin: 10px 20px;
border: none;
vertical-align: top;
::placeholder{
  color: #C4C4C4;
font-size: 14px;
}
:focus{
  outline: none;
}
`

export const CommentBtnStyled = styled.button`
margin: 10px;
vertical-align:top;
font-size: 14px;
line-height: 17px;
color: #C4C4C4;
background-color: transparent;
border: none;
padding: 0;
float: right;
`